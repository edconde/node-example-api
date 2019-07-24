import { App } from './server/app';
import { TestDB } from './server/db';
import { ENVIRONMENT } from './server/environment';

const port = ENVIRONMENT['PORT'];
const app = new App(port);
// Arranque aplicación
app.listen();
// Conexión a base de datos
TestDB.connect();
