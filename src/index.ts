import App from './server/app';
import { TestDB } from './server/db';

const port = 3000;
const app = new App(port);
// Arranque aplicación
app.listen();
// Conexión a base de datos
TestDB.connect();
