'use strict';
exports.__esModule = true;
var environment;
var environment_name = process.env.NODE_ENV.trim();
if (environment_name === 'production') {
    environment = require('../config/environments/production.environment.json');
}
else {
    environment = require('../config/environments/development.environment.json');
}
exports["default"] = environment;
