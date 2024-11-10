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
var climber_svc_exports = {};
__export(climber_svc_exports, {
  default: () => climber_svc_default
});
module.exports = __toCommonJS(climber_svc_exports);
var import_climber = require("../models/climber");
function index() {
  return import_climber.Climber.find();
}
function get(id) {
  return import_climber.Climber.findById(id);
}
function create(json) {
  const climber = new import_climber.Climber(json);
  return climber.save();
}
function update(id, data) {
  return import_climber.Climber.findByIdAndUpdate(id, data, { new: true });
}
function remove(id) {
  return import_climber.Climber.findByIdAndDelete(id);
}
var climber_svc_default = { index, get, create, update, remove };
