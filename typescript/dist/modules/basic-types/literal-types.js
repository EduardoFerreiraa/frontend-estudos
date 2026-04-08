"use strict";
// let logType: string = "info";
//logType = "warn";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = logger;
function logger(type, message) {
    switch (type) {
        case "info":
            console.log(`Info: ${message}`);
            break;
        case "warn":
            console.warn(`Warn: ${message}`);
            break;
        case "error":
            console.error(`Error: ${message}`);
            break;
    }
}
logger("error", "Log com alguma informação sobre o que houve");
