import dotenv from 'dotenv';
import migrateAllTables from '../models/database/db-operations/migrations/table-ops';

dotenv.config();

const { NODE_ENV } = process.env;
const tableCreation = () => {
  if (NODE_ENV === 'production') {
    return (async () => {
      console.log('creating tables ... ');
      await migrateAllTables();
    })();
  }
  return null;
};

export default tableCreation;
