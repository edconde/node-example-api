import * as express from 'express';
import getLogger from '../logger/Logger';

class UserController {
  public router: express.Router;

  // array to hold users
  public users = [
    { firstName: 'fnam1', lastName: 'lnam1', userName: 'username1' },
  ];
  private logger = getLogger();

  constructor() {
    this.router = express.Router();
    this.routes();
  }

  private routes(): void {
    // request to get all the users
    this.router.get('/', (req, res) => {
      this.logger.info('users route');
      res.json(this.users);
    });

    // request to get all the users by userName
    this.router.get('/:userName', (req, res) => {
      this.logger.info(`filter users by username:::::${req.params.userName}`);
      const user = this.users.filter(
        usr => req.params.userName === usr.userName
      );
      res.json(user);
    });

    // request to post the user
    // req.body has object of type {firstName:"fnam1",lastName:"lnam1",userName:"username1"}
    this.router.post('/', (req, res) => {
      this.users.push(req.body);
      res.json(this.users);
    });
  }
}

export default new UserController().router;
