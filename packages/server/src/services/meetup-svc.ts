import { Meetup } from "../models";
import { Schema, model } from "mongoose";

const ClimberSchema = new Schema<Meetup>(
    {
        //   userid: { type: String, required: true, trim: true },
        //   name: { type: String, required: true, trim: true },
        //   nickname: { type: String, trim: true },
        //   home: { type: String, trim: true },
        //   airports: [String],
        //   avatar: String,
        //   color: String
    },
    { collection: "crag_climbers" }
);

const destinations: { [key: string]: Meetup } = {
    yosemite: {
        id: "yosemite",
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
        id: "bishop",
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
