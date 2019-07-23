import * as DEV_ENV from '../config/environments/development.environment.json';
import * as PROD_ENV from '../config/environments/production.environment.json';

let environment: any;
const environment_name = process.env.NODE_ENV.trim();
if (environment_name === 'production') {
  environment = PROD_ENV;
} else {
  environment = DEV_ENV;
}

export default environment;
