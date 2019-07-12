"use strict";
exports.__esModule = true;
var mongoose = require("mongoose");
/**
 * Esquema de la entidad usuario en base de datos
 */
var UserSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    nombre: { type: String, required: true },
    apellidos: { type: String, required: true }
});
// Exportar el modelo User (se aplica el esquema UserSchema sobre la interfaz IUser)
var User = mongoose.model('User', UserSchema);
exports.User = User;
