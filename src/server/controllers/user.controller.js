"use strict";
exports.__esModule = true;
var express = require("express");
var Logger_1 = require("../logger/Logger");
var UserController = /** @class */ (function () {
    function UserController() {
        // array to hold users
        this.users = [
            { firstName: 'fnam1', lastName: 'lnam1', userName: 'username1' },
        ];
        this.router = express.Router();
        this.logger = new Logger_1.Logger();
        this.routes();
    }
    UserController.prototype.routes = function () {
        var _this = this;
        // request to get all the users
        this.router.get('/', function (req, res) {
            _this.logger.info('users route');
            res.json(_this.users);
        });
        // request to get all the users by userName
        this.router.get('/:userName', function (req, res) {
            _this.logger.info("filter users by username:::::" + req.params.userName);
            var user = _this.users.filter(function (usr) { return req.params.userName === usr.userName; });
            res.json(user);
        });
        // request to post the user
        // req.body has object of type {firstName:"fnam1",lastName:"lnam1",userName:"username1"}
        this.router.post('/', function (req, res) {
            _this.users.push(req.body);
            res.json(_this.users);
        });
    };
    return UserController;
}());
exports["default"] = new UserController().router;
