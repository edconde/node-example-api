"use strict";
exports.__esModule = true;
var express = require("express");
var controllers_1 = require("../controllers");
/**
 * Clase que genera el enrutado para el módulo del recurso usuarios
 */
var UserRouter = /** @class */ (function () {
    function UserRouter() {
    }
    /**
     * Devuelve una instancia singleton del enrutado del módulo de usuarios
     */
    UserRouter.getRouting = function () {
        if (!UserRouter.router) {
            UserRouter.router = express.Router();
            UserRouter.routes();
        }
        return UserRouter.router;
    };
    /**
     * Asocia cada endpoint con el método a ejecutar del controlador correspondiente
     */
    UserRouter.routes = function () {
        var userController = new controllers_1.UserController();
        UserRouter.router.get('/', userController.get);
        UserRouter.router.post('/', userController.post);
        UserRouter.router.get('/:id', userController.getById);
        UserRouter.router.put('/:id', userController.put);
        UserRouter.router["delete"]('/:id', userController["delete"]);
    };
    return UserRouter;
}());
exports.UserRouter = UserRouter;
