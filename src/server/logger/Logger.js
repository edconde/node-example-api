"use strict";
exports.__esModule = true;
var log4js_1 = require("log4js");
var environment_1 = require("../environment");
var AppLogger = /** @class */ (function () {
    function AppLogger() {
    }
    AppLogger.getInstance = function () {
        if (!AppLogger.instance) {
            log4js_1.configure(AppLogger.CONFIG_PATH);
            AppLogger.instance = log4js_1.getLogger(environment_1.ENVIRONMENT['LOGGER_CATEGORY']);
        }
        return AppLogger.instance;
    };
    AppLogger.CONFIG_PATH = './src/server/config/logger/log4js.json';
    return AppLogger;
}());
exports["default"] = AppLogger.getInstance();
