import { LitElement, css, html } from "lit";
import { property } from "lit/decorators.js";
import { Tour } from "../../../server/src/models/tour";

export class ClimbingHeaderElement extends LitElement {
    @property({ type: Object }) tour: Tour | null = null;

    render() {
        return html`
            <header>
                <h1>Welcome to CragCrew</h1>
                ${this.tour
                    ? html`<p>${this.tour.name} - ${this.tour.location} (${this.tour.difficulty})</p>`
                    : html`<p>No tour selected</p>`}
                <label>
                    <input type="checkbox" id="dark-mode" autocomplete="off">
                    Dark mode
                </label>
            </header>
        `;
    }

    static styles = css`
        header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1rem;
            background-color: var(--background-color, #f5f5f5);
            border-bottom: 1px solid var(--border-color, #ccc);
        }

        h1 {
            font-family: "Prosto One", sans-serif;
            font-size: 2rem;
            color: var(--primary-color, #333);
            margin: 0;
        }

        p {
            font-family: "Wix Madefor Text", sans-serif;
            color: var(--text-color, #555);
            margin: 0;
        }

        label {
            display: flex;
            align-items: center;
            font-family: "Wix Madefor Text", sans-serif;
            color: var(--text-color, #555);
        }

        #dark-mode {
            margin-left: 0.5rem;
        }
    `;
}

customElements.define("climbing-header", ClimbingHeaderElement);
