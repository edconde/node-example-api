import * as mongoose from 'mongoose';
import getLogger from '../logger/Logger';

class TestDB {
  private static readonly DATABASE_URI = 'mongodb://localhost:27017/test-db';
  private static instance: TestDB;
  private static logger = getLogger();

  private constructor() {}

  static getInstance(): TestDB {
    if (!TestDB.instance) {
      TestDB.instance = new TestDB();
    }
    return TestDB.instance;
  }

  public connect() {
    mongoose.connect(TestDB.DATABASE_URI, { useNewUrlParser: true });
    mongoose.connection.once('open', () => {
      TestDB.logger.info('Connected to Mongo via Mongoose');
    });
    mongoose.connection.on('error', err => {
      TestDB.logger.error('Unable to connect to Mongo via Mongoose', err);
    });
  }
}

export default TestDB;
