import * as express from 'express';
import UserController from '../controllers/user.controller';

class Routes {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.routes();
  }

  private routes(): void {
    // users resource route
    this.app.use('/users', UserController);
  }
}

export default new Routes().app;
