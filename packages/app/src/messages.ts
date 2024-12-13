// src/messages.ts
import { Climber } from "server/models";

export type Msg =
    | ["climber/save", { userid: string; profile: Climber }]
    | ["route/select", { routeid: string }];
