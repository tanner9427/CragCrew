import {
    Auth,
    History,
    Switch,
    define
} from "@calpoly/mustang";

import { html, LitElement } from "lit";
import { ClimbingHeaderElement } from "./components/climb-header";
import { HomeViewElement } from "./components/views/home-view";

// Define the main application element
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

// Register custom elements
define({
    "climbing-header": ClimbingHeaderElement,
    "blazing-app": AppElement,
});
