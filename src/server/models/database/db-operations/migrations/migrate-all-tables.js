import connect from '../../configs/connectToDb';
import { CREATE_TABLE_USERS, CREATE_TABLE_WELCOME_MSGS } from '../../configs/SQLqueries';

const migrateAllTables = async (isDone) => {
  console.log('creating table users ... ');
  await connect.query(CREATE_TABLE_USERS);
  console.log('creating table wlcm_msgs ...');
  await connect.query(CREATE_TABLE_WELCOME_MSGS);

  if (isDone) { isDone(); }
  process.exit(0);
};

(async () => {
  console.log('creating tables ... ');
  await migrateAllTables();
})();
