"use strict";
exports.__esModule = true;
var mongoose = require("mongoose");
var logger_1 = require("../logger");
var environment_1 = require("../environment");
var TestDB = /** @class */ (function () {
    function TestDB() {
    }
    TestDB.getInstance = function () {
        if (!TestDB.instance) {
            TestDB.instance = new TestDB();
        }
        return TestDB.instance;
    };
    TestDB.prototype.connect = function () {
        logger_1.AppLogger.info(TestDB.DATABASE_URI);
        mongoose.connect(TestDB.DATABASE_URI, {
            useNewUrlParser: true
        });
        mongoose.connection.once('open', function () {
            logger_1.AppLogger.info('Connected to Mongo via Mongoose');
        });
        mongoose.connection.on('error', function (err) {
            logger_1.AppLogger.error('Unable to connect to Mongo via Mongoose', err);
        });
    };
    TestDB.DATABASE_URI = "mongodb://localhost:27017/" + environment_1.ENVIRONMENT['TEST_DATABASE_NAME'];
    return TestDB;
}());
exports["default"] = TestDB.getInstance();
