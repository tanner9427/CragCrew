import {
    Auth,
    History,
    Switch,
    define
} from "@calpoly/mustang";
import { html, LitElement } from "lit";
import { ClimbingHeaderElement } from "./components/climb-header";
import { HomeViewElement } from "./components/views/home-view";

class AppElement extends LitElement {
    static uses = define({
        "home-view": HomeViewElement, // Reference your home view component
    });

    protected render() {
        return html`
      <home-view></home-view>
    `;
    }
}

const routes = [
    {
        path: "/app/climb/:id",
        view: (params: Switch.Params) => html`
        <climb-view climb-id=${params.id}></climb-view>
      `,
    },
    {
        path: "/app/about",
        view: () => html`
        <about-view></about-view>
      `,
    },
    {
        path: "/app",
        view: () => html`
        <landing-view></landing-view>
        <a href="/app/about">About</a>
      `,
    },
    {
        path: "/",
        redirect: "/app",
    },
];


// Register custom elements
define({
    "climbing-header": ClimbingHeaderElement,
    "climbing-app": AppElement,
    "mu-auth": Auth.Provider,
    "mu-history": History.Provider,
    "mu-switch": class AppSwitch extends Switch.Element {
        constructor() {
            super(routes, "climbing:history", "climbing:auth");
        }
    },
});
