import * as mongoose from 'mongoose';

/**
 * Estructura de un documento de tipo usuario
 */
export interface IUser extends mongoose.Document {
  email: string;
  nombre: string;
  apellidos: string;
}
/**
 * Esquema de la entidad usuario en base de datos
 */
const UserSchema: mongoose.Schema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  nombre: { type: String, required: true },
  apellidos: { type: String, required: true },
});

// Exportar el modelo User (se aplica el esquema UserSchema sobre la interfaz IUser)
const User = mongoose.model<IUser>('User', UserSchema);
export { User };
