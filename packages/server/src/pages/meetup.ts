import { css, html } from "@calpoly/mustang/server";
import { Meetup } from "../models";
import renderPage from "./renderPage.js"; // generic page renderer

export class MeetupPage {
    data: Meetup;

    constructor(data: Meetup) {
        this.data = data;
    }

    render() {
        return renderPage({
            body: this.renderBody(),
            stylesheets: ["/styles/meetup.css"],
            styles: [
                css`main.page {
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
        const { climbType, date, location, skillLevelRequired, currentParticipants } = this.data as Meetup;
        const host = currentParticipants[0]; // assuming the first participant is the host, adjust if different
    
        return html`
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
    

    renderParticipant(participant: any) {
        const { name, skillLevel } = participant;
        return html`
    <li>
        <climb-climber>
        <span slot="name">${name}</span>
        <span slot="skill-level">${skillLevel}</span>
        </climb-climber>
    </li>
    `;
    }
}
