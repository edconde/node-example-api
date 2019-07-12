import { configure, getLogger as getLog4jsLogger, Logger } from 'log4js';

class AppLogger {
  private constructor() {}

  private static readonly CONFIG_PATH = './src/server/config/log4js.json';
  private static instance: Logger;

  static getInstance(): Logger {
    if (!AppLogger.instance) {
      configure(AppLogger.CONFIG_PATH);
      AppLogger.instance = getLog4jsLogger();
    }
    return AppLogger.instance;
  }
}

export default AppLogger.getInstance();
