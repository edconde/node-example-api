import App from './server/app';
import { TestDB } from './server/db';

const port = 3000;

const app = new App(port);

app.listen();
TestDB.connect();
