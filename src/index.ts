import App from './server/app';
import TestDB from './server/db/test.database';

const port = 3000;

const app = new App(port);
const db = TestDB.getInstance();

app.listen();
db.connect();
