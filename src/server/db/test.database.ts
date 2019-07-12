import * as mongoose from 'mongoose';
import AppLogger from '../logger/Logger';

class TestDB {
  private static readonly DATABASE_URI = 'mongodb://localhost:27017/test-db';
  private static instance: TestDB;

  private constructor() {}

  public static getInstance(): TestDB {
    if (!TestDB.instance) {
      TestDB.instance = new TestDB();
    }
    return TestDB.instance;
  }

  public connect() {
    mongoose.connect(TestDB.DATABASE_URI, { useNewUrlParser: true });
    mongoose.connection.once('open', () => {
      AppLogger.info('Connected to Mongo via Mongoose');
    });
    mongoose.connection.on('error', err => {
      AppLogger.error('Unable to connect to Mongo via Mongoose', err);
    });
  }
}

export default TestDB.getInstance();
