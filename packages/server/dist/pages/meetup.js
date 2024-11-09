"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var meetup_exports = {};
__export(meetup_exports, {
  MeetupPage: () => MeetupPage
});
module.exports = __toCommonJS(meetup_exports);
var import_server = require("@calpoly/mustang/server");
var import_renderPage = __toESM(require("./renderPage.js"));
class MeetupPage {
  data;
  constructor(data) {
    this.data = data;
  }
  render() {
    return (0, import_renderPage.default)({
      body: this.renderBody(),
      stylesheets: ["/styles/meetup.css"],
      styles: [
        import_server.css`main.page {
            --page-grids: 8;
            @media screen and (max-width: 48rem) {
            --page-grids: 6;
        }
        }`
      ],
      scripts: [
        `import { define } from "@calpoly/mustang";
        import { ClimberElement } from "/scripts/climber.js";

        define({
            "climb-climber": ClimberElement
        });`
      ]
    });
  }
  renderBody() {
    const { climbType, date, location, skillLevelRequired, currentParticipants } = this.data;
    const host = currentParticipants[0];
    return import_server.html`
        <body>
        <main class="page">
            <section class="meetup">
            <header>
                <h1>${climbType}</h1>
                <p>${new Date(date).toLocaleDateString()}</p>
                <p>${location.name}</p>
                <p>Skill Level Required: ${skillLevelRequired}</p>
            </header>
            <section class="host">
                <h2>Hosted by: ${host.name}</h2>
                <p>Contact: ${host.contactInfo.email}</p>
            </section>
            <section class="participants">
                <h3>Participants</h3>
                <ul>
                    ${currentParticipants.map(this.renderParticipant).join("")}
                </ul>
            </section>
            </section>
        </main>
        </body>
        `;
  }
  renderParticipant(participant) {
    const { name, skillLevel } = participant;
    return import_server.html`
    <li>
        <climb-climber>
        <span slot="name">${name}</span>
        <span slot="skill-level">${skillLevel}</span>
        </climb-climber>
    </li>
    `;
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  MeetupPage
});
