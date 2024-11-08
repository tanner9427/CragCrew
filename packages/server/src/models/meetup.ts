// src/models/climber.ts
export interface Climber {
    id: string;
    name: string;
    skillLevel: SkillLevel;
    preferredClimbTypes: Array<ClimbType>;
    availableEquipment: Array<Equipment>;
    preferredLocation?: Location;
    contactInfo: ContactInfo;
}

export type SkillLevel = 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';

export interface ContactInfo {
    email: string;
    phone?: string;
}

// src/models/meetup.ts
// import { Climber } from './climber';
// import { Location } from './location';

export interface Meetup {
    id: string;
    date: Date;
    time: string; // or Date if more specific
    location: Location;
    skillLevelRequired: SkillLevel;
    maxParticipants: number;
    currentParticipants: Array<Climber>;
    climbType: ClimbType;
    equipmentNeeded: Array<Equipment>;
}

export type ClimbType = 'Bouldering' | 'Sport Climbing' | 'Traditional Climbing' | 'Ice Climbing';

  // src/models/location.ts
export interface Location {
    id: string;
    name: string;
    coordinates: Coordinates;
    description?: string;
    difficultyRating: DifficultyRating;
}

export interface Coordinates {
    lat: number;
    lon: number;
}

export type DifficultyRating = 'Easy' | 'Moderate' | 'Difficult' | 'Very Difficult';

  // src/models/equipment.ts
export interface Equipment {
    id: string;
    name: string;
    type: EquipmentType;
    condition: EquipmentCondition;
}

export type EquipmentType = 'Rope' | 'Harness' | 'Climbing Shoes' | 'Helmet' | 'Quickdraw' | 'Carabiner' | 'Belay Device' | 'Chalk';

export type EquipmentCondition = 'New' | 'Good' | 'Used' | 'Worn';

  // src/models/index.ts
//   export * from './climber';
//   export * from './meetup';
//   export * from './location';
//   export * from './equipment';
