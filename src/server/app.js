"use strict";
exports.__esModule = true;
var bodyParser = require("body-parser");
var cors = require("cors");
var express = require("express");
var middleware_1 = require("./middleware");
var routes_1 = require("./routes");
var logger_1 = require("./logger");
var App = /** @class */ (function () {
    function App(port) {
        this.app = express();
        this.port = port;
        this.initializeMiddlewares();
        this.initializeRouting();
    }
    // Configure Express middleware.
    App.prototype.initializeMiddlewares = function () {
        // Parses the body of the incoming request and makes it available under the request.body property
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
        // Enable cors
        this.app.use(cors());
        this.app.options('*', cors());
        // error handler
        this.app.use(middleware_1.errorMiddleware);
    };
    App.prototype.initializeRouting = function () {
        // test api
        this.app.get('/', function (req, res, next) {
            res.send('Typescript App works!!');
        });
        // api routing
        this.app.use('/api', routes_1.Routes.getRoutes());
        // handle undefined routes
        this.app.use('*', function (req, res, next) {
            res.send('Make sure url is correct!!!');
        });
    };
    // start listening
    App.prototype.listen = function () {
        var _this = this;
        this.app.listen(this.port, function () {
            logger_1.AppLogger.log("Express running on port " + _this.port);
        });
    };
    return App;
}());
exports["default"] = App;
