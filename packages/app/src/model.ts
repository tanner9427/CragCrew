// src/model.ts
import { ClimbingRoute, Climber } from "server/models";

export interface Model {
    route?: ClimbingRoute;
    climber?: Climber;
}

export const init: Model = {};
