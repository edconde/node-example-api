"use strict";
exports.__esModule = true;
var express = require("express");
var user_controller_1 = require("../controllers/user.controller");
var Routes = /** @class */ (function () {
    function Routes() {
        this.app = express();
        this.routes();
    }
    Routes.prototype.routes = function () {
        // users resource route
        this.app.use('/users', user_controller_1["default"]);
    };
    return Routes;
}());
exports["default"] = new Routes().app;
