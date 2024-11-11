import { css, html, shadow } from "@calpoly/mustang";
import reset from "./styles/reset.css.js";

export class ClimbEventCard extends HTMLElement {

    get src() {
        return this.getAttribute("src");
    }

    connectedCallback() {
        if (this.src) this.hydrate(this.src);
    }

    static template = html`
        <div>
            <h3><slot name="event-name"></slot></h3>
            <p><slot name="date"></slot></p>
            <p><slot name="location"></slot></p>
            <p><slot name="description"></slot></p>
        </div>
    `;

    hydrate(url) {
        fetch(url)
            .then((res) => {
                if (res.status !== 200) throw `Status: ${res.status}`;
                return res.json();
            })
            .then((json) => this.renderSlots(json))
            .catch((error) =>
                console.log(`Failed to render data ${url}:`, error)
            );
    }

    renderSlots(json) {
        const entries = Object.entries(json);
        const toSlot = ([key, value]) =>
            html`<span slot="${key}">${value}</span>`

        const fragment = entries.map(toSlot);
        this.replaceChildren(...fragment);
    }

    static styles = css`
        .event-card {
            border: 1px solid #e0e0e0;
            padding: 16px;
            border-radius: 8px;
            background-color: #f9f9f9;
            font-family: 'Wix Madefor Text', sans-serif;
        }
        h3 { 
            font-size: 1.5em; 
            color: var(--primary-color, #3a3a3a); 
            margin: 0 0 8px;
        }
        .date, .location {
            font-weight: bold;
            color: var(--secondary-color, #555555);
        }
        .description {
            color: #7a7a7a;
            margin-top: 8px;
        }
        p {
            font-size: 1em; 
            line-height: 1.4;
            margin: 4px 0;
        }
    `;

    constructor() {
        super();
        shadow(this)
            .template(ClimbEventCard.template)
            .styles(reset.styles, ClimbEventCard.styles);
    }
}
