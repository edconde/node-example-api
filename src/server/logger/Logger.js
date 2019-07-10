"use strict";
exports.__esModule = true;
var log4js_1 = require("log4js");
var SingletonLogger = /** @class */ (function () {
    function SingletonLogger() {
    }
    SingletonLogger.getInstance = function () {
        if (!SingletonLogger.instance) {
            log4js_1.configure(SingletonLogger.CONFIG_PATH);
            SingletonLogger.instance = log4js_1.getLogger('production');
        }
        return SingletonLogger.instance;
    };
    SingletonLogger.CONFIG_PATH = './src/server/config/log4js.json';
    return SingletonLogger;
}());
exports.SingletonLogger = SingletonLogger;
