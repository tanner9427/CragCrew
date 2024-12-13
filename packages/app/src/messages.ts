// src/messages.ts
import { Climber } from "server/models";

export type Msg =
    | ["climber/save", { userid: string; profile: Climber }]
    | ["route/select", { routeid: string }]
    | ["profile/save", {
        climbId?: string; 
        profile: { name: string; age: number; level: string };
        onSuccess?: () => void;
        onFailure?: (err: Error) => void;
    }];
