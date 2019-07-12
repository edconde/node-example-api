"use strict";
exports.__esModule = true;
var express = require("express");
var _1 = require(".");
/**
 * Clase que genera el enrutado de la aplicación
 */
var Routes = /** @class */ (function () {
    function Routes() {
    }
    /**
     * Devuelve una instancia singleton del enrutado de la aplicación
     */
    Routes.getRoutes = function () {
        if (!Routes.app) {
            Routes.app = express();
            Routes.routes();
        }
        return Routes.app;
    };
    /**
     * Asocia los endpoint base de cada módulo con su enrutador
     */
    Routes.routes = function () {
        // ruta del recurso usuarios
        Routes.app.use('/users', _1.UserRouter.getRouting());
    };
    return Routes;
}());
exports.Routes = Routes;
