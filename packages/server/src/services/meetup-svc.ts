import { Meetup } from "../models";

const destinations: { [key: string]: Meetup } = {
    yosemite: {
        id: "yosemite", // You need an id
        date: new Date(), // Placeholder date
        time: "08:00 AM", // Placeholder time
        location: {
            id: "yosemite-location", // Optional ID for location
            name: "Yosemite",
            coordinates: { lat: 37.8651, lon: -119.5383 }, // Correctly placed lat and lon inside coordinates
            difficultyRating: "Difficult", // Placeholder difficulty rating
        },
        skillLevelRequired: "Intermediate", // Placeholder skill level
        maxParticipants: 10, // Placeholder max participants
        currentParticipants: [], // Empty array for current participants
        climbType: "Sport Climbing", // Example climbing type
        equipmentNeeded: [], // Placeholder empty equipment
    },
    bishop: {
        id: "bishop", // You need an id
        date: new Date(), // Placeholder date
        time: "09:00 AM", // Placeholder time
        location: {
            id: "bishop-location", // Optional ID for location
            name: "Bishop",
            coordinates: { lat: 37.3595, lon: -118.4455 }, // Correctly placed lat and lon inside coordinates
            difficultyRating: "Moderate", // Placeholder difficulty rating
        },
        skillLevelRequired: "Beginner", // Placeholder skill level
        maxParticipants: 5, // Placeholder max participants
        currentParticipants: [], // Empty array for current participants
        climbType: "Bouldering", // Example climbing type
        equipmentNeeded: [], // Placeholder empty equipment
    },
};

export function getDestination(destId: string): Meetup | null {
    return destinations[destId] || null;
}
