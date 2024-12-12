// src/components/climb-header.ts
import { LitElement, css, html } from "lit";

export class ClimbingHeaderElement extends LitElement {
    render() {
        return html`
            <header>
                <h1>Welcome to CragCrew</h1>
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