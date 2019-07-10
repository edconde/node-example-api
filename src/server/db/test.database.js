"use strict";
exports.__esModule = true;
var mongoose = require("mongoose");
var Logger_1 = require("../logger/Logger");
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
        mongoose.connect(TestDB.DATABASE_URI, { useNewUrlParser: true });
        mongoose.connection.once('open', function () {
            TestDB.logger.warn('Connected to Mongo via Mongoose');
        });
        mongoose.connection.on('error', function (err) {
            TestDB.logger.error('Unable to connect to Mongo via Mongoose', err);
        });
    };
    TestDB.DATABASE_URI = 'mongodb://localhost:27017/test-db';
    TestDB.logger = Logger_1.SingletonLogger.getInstance();
    return TestDB;
}());
exports["default"] = TestDB;
