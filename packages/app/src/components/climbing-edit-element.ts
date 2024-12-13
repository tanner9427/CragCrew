// climbing-edit-element.ts
import { define, Form, View } from "@calpoly/mustang";
import { css, html } from "lit";
import { property, state } from "lit/decorators.js";
import { Msg } from "../messages";
import { Model } from "../model";

export class ClimbingEditElement extends View<Model, Msg> {
    static uses = define({
        "mu-form": Form.Element,
    });

    @property()
    climbId?: string;

    @state()
    get climbingProfile() {
        return this.model.profile; // Adjust based on your climbing application's model
    }

    _handleSubmit(event: Form.SubmitEvent<any>) {
        this.dispatchMessage([
            "profile/save",
            {
                climbId: this.climbId,
                profile: event.detail,
                onSuccess: () =>
                    window.history.pushState({}, "", `/app/climber/${this.climbId}`),
                onFailure: (error: Error) => console.error("ERROR:", error),
            },
        ]);
    }

    render() {
        return html`
      <main class="page">
        <mu-form
          .init=${this.climbingProfile}
          @mu-form:submit=${this._handleSubmit}>
          <label>
            Name:
            <input name="name" type="text" .value=${this.climbingProfile?.name ?? ""} />
          </label>
          <label>
            Age:
            <input name="age" type="number" .value=${this.climbingProfile?.age ?? ""} />
          </label>
          <label>
            Climbing Level:
            <input name="level" type="text" .value=${this.climbingProfile?.level ?? ""} />
          </label>
          <button type="submit">Save</button>
        </mu-form>
      </main>
    `;
    }
}

define({
    "climbing-edit": ClimbingEditElement,
});
