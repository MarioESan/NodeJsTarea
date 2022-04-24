"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = __importDefault(require("./config/config"));
const logger_1 = __importDefault(require("./config/logger"));
logger_1.default.error('error');
logger_1.default.info('info');
logger_1.default.info(config_1.default.server.hostname);
logger_1.default.info(config_1.default.server.port.toString());

