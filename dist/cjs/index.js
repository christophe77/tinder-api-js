"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const auth_1 = __importDefault(require("./api/auth"));
const feeling_1 = __importDefault(require("./api/feeling"));
const recommandation_1 = __importDefault(require("./api/recommandation"));
const db_1 = require("./db/db");
const tinderApi = {
    auth: auth_1.default,
    feeling: feeling_1.default,
    recommandation: recommandation_1.default,
};
(0, db_1.createDb)();
exports.default = tinderApi;
