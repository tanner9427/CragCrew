import mongoose from 'mongoose';

const ClimberSchema = new mongoose.Schema({
    name: { type: String, required: true },
    level: { type: String, required: true },
    preferredClimbType: { type: String, required: true },
    equipment: { type: [String], required: true },  // Example: ["rope", "harness"]
    location: { type: String, required: true }
});

export const Climber = mongoose.model('Climber', ClimberSchema);
