import { css, html, shadow } from "@calpoly/mustang";
import reset from "./styles/reset.css.js";

    export class ClimbEventCard extends HTMLElement {
    static template = html`
        <div>
            <h3><slot name="event-name"></slot></h3>
            <p><slot name="date"></slot></p>
            <p><slot name="location"></slot></p>
            <p><slot name="description"></slot></p>
        </div>
    `;

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
