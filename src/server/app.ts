import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import * as express from 'express';
import { errorMiddleware } from './middleware';
import { Routes } from './routes';
import { AppLogger } from './logger';

class App {
  private app: express.Application;
  private port: number;

  constructor(port: number) {
    this.app = express();
    this.port = port;
    this.initializeMiddlewares();
    this.initializeRouting();
  }

  // Configure Express middleware.
  private initializeMiddlewares(): void {
    // Parses the body of the incoming request and makes it available under the request.body property
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
    // Enable cors
    this.app.use(cors());
    this.app.options('*', cors());

    // error handler
    this.app.use(errorMiddleware);
  }

  private initializeRouting(): void {
    // test api
    this.app.get('/', (req, res, next) => {
      res.send('Typescript App works!!');
    });

    // api routing
    this.app.use('/api', Routes.getRoutes());

    // handle undefined routes
    this.app.use('*', (req, res, next) => {
      res.send('Make sure url is correct!!!');
    });
  }

  // start listening
  public listen() {
    this.app.listen(this.port, () => {
      AppLogger.log(`Express running on port ${this.port}`);
    });
  }
}

export default App;
