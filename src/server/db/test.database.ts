import * as mongoose from 'mongoose';
import { AppLogger } from '../logger';
import { ENVIRONMENT } from '../environment';

class TestDB {
  private static readonly DATABASE_URI = `mongodb://localhost:27017/${
    ENVIRONMENT['TEST_DATABASE_NAME']
  }`;
  private static instance: TestDB;

  private constructor() {}

  public static getInstance(): TestDB {
    if (!TestDB.instance) {
      TestDB.instance = new TestDB();
    }
    return TestDB.instance;
  }

  public connect() {
    AppLogger.info(TestDB.DATABASE_URI);
    mongoose.connect(TestDB.DATABASE_URI, {
      useNewUrlParser: true,
    });
    mongoose.connection.once('open', () => {
      AppLogger.info('Connected to Mongo via Mongoose');
    });
    mongoose.connection.on('error', err => {
      AppLogger.error('Unable to connect to Mongo via Mongoose', err);
    });
  }
}

export default TestDB.getInstance();
