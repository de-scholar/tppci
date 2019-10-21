import dotenv from 'dotenv';
import connect from '../../configs/connectToDb';
import { hashPassword } from '../../../../middlewares/hashing';

import {
  CREATE_TABLE_APPLICATIONS,
  CREATE_TABLE_USERS,
  CREATE_TABLE_WELCOME_MSGS,
  ADD_DEFAULT_USER,
} from '../../configs/SQLqueries';

dotenv.config();

const migrateAllTables = async (isDone) => {
  console.log('creating table applications_for_membership ... ');
  await connect().query(CREATE_TABLE_APPLICATIONS);
  console.log('creating table users ... ');
  await connect().query(CREATE_TABLE_USERS);
  console.log('creating table wlcm_msgs ...');
  await connect().query(CREATE_TABLE_WELCOME_MSGS);
  console.log('hashing descholar\'s passkey');
  const hash = await hashPassword('mugirase');
  console.log('inserting a descholar as an inital user for app functionalities');
  await connect().query(ADD_DEFAULT_USER(hash));
  console.log(`descholar inserted successFully with password${hash}`);

  if (isDone) { isDone(); }
  process.exit(0);
};

export default migrateAllTables;
