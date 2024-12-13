// Models
// export * from './climber';
export * from './meetup';
// export * from './location';
// export * from './equipment';
// server/models/index.ts
export interface ClimbingRoute {
    id: string;
    name: string;
    grade: string;
    description: string;
}

export interface Climber {
    id: string;
    name: string;
    experience: string;
}
