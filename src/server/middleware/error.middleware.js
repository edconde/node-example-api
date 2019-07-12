"use strict";
exports.__esModule = true;
function errorMiddleware(err, req, res, next) {
    res.status(500);
    res.json({ message: err.name + ': ' + err.message });
}
exports.errorMiddleware = errorMiddleware;
