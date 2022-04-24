"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getTimeStamp = () => {
    return new Date().toISOString();
};
const info = (message, object) => {
    if (object) {
        console.info(`[${getTimeStamp()}] [INFO] [${message}]`, object);
    }
    else {
        console.info(`[${getTimeStamp()}] [INFO] [${message}]`);
    }
};
const error = (message, object) => {
    if (object) {
        console.info(`[${getTimeStamp()}] [ERROR] [${message}]`, object);
    }
    else {
        console.info(`[${getTimeStamp()}] [ERROR] [${message}]`);
    }
};
exports.default = { info, error };

