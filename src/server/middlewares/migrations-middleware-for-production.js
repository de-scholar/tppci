import dotenv from 'dotenv';
import migrateAllTables from '../models/database/db-operations/migrations/table-ops';

dotenv.config();

const { NODE_ENV } = process.env;
const tableCreation = (req, res, next) => {
  if (NODE_ENV === 'production') {
    (async () => {
      console.log('creating tables ... ');
      await migrateAllTables();
    })();
    console.log('table created successfully!');
    next();
  }
  console.log('not in production mode');
  next();
};

export default tableCreation;
