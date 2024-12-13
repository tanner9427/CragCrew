import { Climber } from "server/models";

export type Msg =
    | [
        "climber/save",
        {
            userid: string;
            profile: Climber;
            onSuccess?: () => void;
            onFailure?: (err: Error) => void;
        }
    ]
    | ["route/select", { routeid: string }];
