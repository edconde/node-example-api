import { configure, getLogger as getLog4jsLogger, Logger } from 'log4js';

class SingletonLogger {
  private static readonly CONFIG_PATH = './src/server/config/log4js.json';
  private static instance: Logger;

  static getLogger(): Logger {
    if (!SingletonLogger.instance) {
      configure(SingletonLogger.CONFIG_PATH);
      SingletonLogger.instance = getLog4jsLogger('production');
    }
    return SingletonLogger.instance;
  }
}

export default SingletonLogger.getLogger;
