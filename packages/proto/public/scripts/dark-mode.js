import { LitElement, html, css } from 'lit';

class DarkMode extends LitElement {
    static styles = css`
        
    `;

    constructor() {
        super();
        this.isDarkMode = false;
    }

    relayDarkModeEvent(event) {
        const darkModeEvent = new CustomEvent("darkmode:toggle", {
            detail: { isChecked: event.target.checked },
            bubbles: true,
            composed: true
        });
        this.dispatchEvent(darkModeEvent);

        this.updateBodyClass(event.target.checked);
    }

    updateBodyClass(isChecked) {
        if (isChecked) {
            document.body.classList.add("dark-mode");
        } else {
            document.body.classList.remove("dark-mode");
        }
    }

    render() {
        return html`
            <label>
                Dark Mode:
                <input 
                    type="checkbox" 
                    @change=${this.relayDarkModeEvent} 
                />
            </label>
        `;
    }
}

customElements.define('dark-mode', DarkMode);
