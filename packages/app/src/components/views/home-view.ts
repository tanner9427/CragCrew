import { Auth, Observer } from "@calpoly/mustang";
import { css, html, LitElement } from "lit";
import { state } from "lit/decorators.js";
import { Tour } from "../../../../server/src/models/tour.ts";

export class HomeViewElement extends LitElement {
    src = "/api/tours"; 

    @state()
    tourIndex: Array<Tour> = [];

    render() {
        const tourList = this.tourIndex.map(this.renderItem);

        return html`
            <main class="page">
                <header>
                    <h2>Your Trips</h2>
                </header>
                <dl>${tourList}</dl>
            </main>
        `;
    }

    renderItem(tour: Tour) {
        return html`
            <dt>${tour.name}</dt>
            <dd>${tour.description}</dd>
        `;
    }

    hydrate(url: string) {
        fetch(url, { headers: Auth.headers(this._user) })
            .then((res: Response) => {
                if (res.status === 200) return res.json();
                throw new Error(`Server responded with status ${res.status}`);
            })
            .then((json: { tours: Array<Tour> }) => {
                if (json && json.tours) {
                    this.tourIndex = json.tours;
                }
            })
            .catch((err) => console.error("Failed to load tour data:", err));
    }

    _authObserver = new Observer<Auth.Model>(this, "blazing:auth");

    _user = new Auth.User();

    connectedCallback() {
        super.connectedCallback();
        this._authObserver.observe(({ user }) => {
            if (user) {
                this._user = user;
            }
            this.hydrate(this.src);
        });
    }
}

customElements.define("home-view", HomeViewElement);
