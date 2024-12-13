// src/model.ts
import { ClimbingRoute, Climber } from "server/models";

export interface Model {
    route?: ClimbingRoute;
    climber?: Climber;
    profile?: { 
        name: string; 
        age: number; 
        level: string; 
    }; // Add this property
}

export const init: Model = {};
