"use strict";
exports.__esModule = true;
var log4js_1 = require("log4js");
var AppLogger = /** @class */ (function () {
    function AppLogger() {
    }
    AppLogger.getInstance = function () {
        if (!AppLogger.instance) {
            log4js_1.configure(AppLogger.CONFIG_PATH);
            AppLogger.instance = log4js_1.getLogger();
        }
        return AppLogger.instance;
    };
    AppLogger.CONFIG_PATH = './src/server/config/log4js.json';
    return AppLogger;
}());
exports["default"] = AppLogger.getInstance();
