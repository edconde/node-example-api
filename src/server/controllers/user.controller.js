"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var logger_1 = require("../logger");
var services_1 = require("../services");
var UserController = /** @class */ (function () {
    function UserController() {
    }
    /**
     * Consultar todos los usuarios
     * @param _req petición
     * @param _res respuesta
     */
    UserController.prototype.get = function (_req, _res) {
        return __awaiter(this, void 0, void 0, function () {
            var users_1, exception_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, services_1.userService
                                .findAll()
                                .then(function (data) {
                                users_1 = data;
                                _res.json(users_1);
                            })["catch"](function (error) {
                                logger_1.AppLogger.error(error);
                            })];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        exception_1 = _a.sent();
                        logger_1.AppLogger.error(exception_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Consultar un usuario por id
     * @param req petición
     * @param res respuesta
     */
    UserController.prototype.getById = function (_req, _res) {
        return __awaiter(this, void 0, void 0, function () {
            var id, exception_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        id = _req.params.id;
                        return [4 /*yield*/, services_1.userService
                                .findById(id)
                                .then(function (data) {
                                _res.json(data);
                            })["catch"](function (error) {
                                logger_1.AppLogger.error(error);
                            })];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        exception_2 = _a.sent();
                        logger_1.AppLogger.error(exception_2);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    // req.body has object of type {firstName:"fnam1",lastName:"lnam1",userName:"username1"}
    /**
     * Crear un usuario
     * @param req petición
     * @param res respuesta
     */
    UserController.prototype.post = function (_req, _res) {
        return __awaiter(this, void 0, void 0, function () {
            var user, exception_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        user = _req.body;
                        return [4 /*yield*/, services_1.userService
                                .addOne(user)
                                .then(function (data) {
                                _res.json(data);
                            })["catch"](function (error) {
                                logger_1.AppLogger.error(error);
                            })];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        exception_3 = _a.sent();
                        logger_1.AppLogger.error(exception_3);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    // req.body has object of type {firstName:"fnam1",lastName:"lnam1",userName:"username1"}
    /**
     * Modificar un usuario
     * @param req petición
     * @param res respuesta
     */
    UserController.prototype.put = function (_req, _res) {
        return __awaiter(this, void 0, void 0, function () {
            var conditions, user, exception_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        conditions = {
                            _id: _req.params.id
                        };
                        user = _req.body;
                        return [4 /*yield*/, services_1.userService
                                .updateOne(conditions, user)
                                .then(function (data) {
                                _res.json(data);
                            })["catch"](function (error) {
                                logger_1.AppLogger.error(error);
                            })];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        exception_4 = _a.sent();
                        logger_1.AppLogger.error(exception_4);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Eliminar un usuario por id
     * @param req petición
     * @param res respuesta
     */
    UserController.prototype["delete"] = function (_req, _res) {
        return __awaiter(this, void 0, void 0, function () {
            var id, exception_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        id = _req.params.id;
                        return [4 /*yield*/, services_1.userService
                                .deleteById(id)
                                .then(function (data) {
                                _res.json(data);
                            })["catch"](function (error) {
                                logger_1.AppLogger.error(error);
                            })];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        exception_5 = _a.sent();
                        logger_1.AppLogger.error(exception_5);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return UserController;
}());
exports.UserController = UserController;
