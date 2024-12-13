// src/update.ts
import { Auth, Update } from "@calpoly/mustang";
import { Msg } from "./messages";
import { Model } from "./model";
import { ClimbingRoute, Climber } from "server/models";

export default function update(
    message: Msg,
    apply: Update.ApplyMap<Model>,
    user: Auth.User
) {
    switch (message[0]) {
        case "route/select":
            selectRoute(message[1], user).then((route) =>
                apply((model) => ({ ...model, route }))
            );
            break;
        case "climber/save":
            saveClimber(message[1], user).then((climber) =>
                apply((model) => ({ ...model, climber }))
            );
            break;
        default:
            const unhandled: never = message[0];
            throw new Error(`Unhandled Climbing message "${unhandled}"`);
    }
}

function selectRoute(
    msg: { routeid: string },
    user: Auth.User
) {
    return fetch(`/api/routes/${msg.routeid}`, {
        headers: Auth.headers(user),
    })
        .then((response) => response.json())
        .then((json) => json as ClimbingRoute);
}

function saveClimber(
    msg: { userid: string; profile: Climber },
    user: Auth.User
) {
    return fetch(`/api/climbers/${msg.userid}`, {
        method: "POST",
        headers: {
            ...Auth.headers(user),
            "Content-Type": "application/json",
        },
        body: JSON.stringify(msg.profile),
    }).then((response) => response.json());
}
