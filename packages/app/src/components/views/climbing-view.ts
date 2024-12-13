// src/views/climbing-view.ts
import { define, View } from "@calpoly/mustang";
import { css, html } from "lit";
import { property } from "lit/decorators.js";
import { state } from "lit/decorators.js";
import { ClimbingRoute } from "server/models";
import { Msg } from "../../messages";
import { Model } from "../../model";

export class ClimbingViewElement extends View<Model, Msg> {
    @property()
    routeid?: string;

    @state()
    get route(): ClimbingRoute | undefined {
        return this.model.route;
    }

    constructor() {
        super("climbing:model");
    }

    render() {
        return html`
      <div>
        ${this.route
                ? html`
              <h1>${this.route.name}</h1>
              <p>Grade: ${this.route.grade}</p>
              <p>Description: ${this.route.description}</p>
            `
                : html`<p>Select a climbing route to view details.</p>`}
      </div>
    `;
    }
}

define({ "climbing-view": ClimbingViewElement });
