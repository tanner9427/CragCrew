"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var meetup_svc_exports = {};
__export(meetup_svc_exports, {
  getDestination: () => getDestination
});
module.exports = __toCommonJS(meetup_svc_exports);
const destinations = {
  yosemite: {
    id: "yosemite",
    // You need an id
    date: /* @__PURE__ */ new Date(),
    // Placeholder date
    time: "08:00 AM",
    // Placeholder time
    location: {
      id: "yosemite-location",
      // Optional ID for location
      name: "Yosemite",
      coordinates: { lat: 37.8651, lon: -119.5383 },
      // Correctly placed lat and lon inside coordinates
      difficultyRating: "Difficult"
      // Placeholder difficulty rating
    },
    skillLevelRequired: "Intermediate",
    // Placeholder skill level
    maxParticipants: 10,
    // Placeholder max participants
    currentParticipants: [],
    // Empty array for current participants
    climbType: "Sport Climbing",
    // Example climbing type
    equipmentNeeded: []
    // Placeholder empty equipment
  },
  bishop: {
    id: "bishop",
    // You need an id
    date: /* @__PURE__ */ new Date(),
    // Placeholder date
    time: "09:00 AM",
    // Placeholder time
    location: {
      id: "bishop-location",
      // Optional ID for location
      name: "Bishop",
      coordinates: { lat: 37.3595, lon: -118.4455 },
      // Correctly placed lat and lon inside coordinates
      difficultyRating: "Moderate"
      // Placeholder difficulty rating
    },
    skillLevelRequired: "Beginner",
    // Placeholder skill level
    maxParticipants: 5,
    // Placeholder max participants
    currentParticipants: [],
    // Empty array for current participants
    climbType: "Bouldering",
    // Example climbing type
    equipmentNeeded: []
    // Placeholder empty equipment
  }
};
function getDestination(destId) {
  return destinations[destId] || null;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  getDestination
});
