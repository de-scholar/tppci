import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const {
  DATABASE_USERNAME,
  DATABASE_HOST,
  DATABASE_NAME,
  DATABASE_PASSWORD,
  DATABASE_PORT,
  DATABASE_HOST_PRODUCTION,
  DATABASE_USERNAME_PRODUCTION,
  DATABASE_NAME_PRODUCTION,
  DATABASE_PORT_PRODUCTION,
  DATABASE_PASSWORD_PRODUCTION,
  NODE_ENV,
} = process.env;

const connect = () => {
  if (NODE_ENV === 'dev') {
    return new Pool({
      user: DATABASE_USERNAME,
      host: DATABASE_HOST,
      database: DATABASE_NAME,
      password: DATABASE_PASSWORD,
      port: DATABASE_PORT,
    });
  } if (NODE_ENV === 'production') {
    return new Pool({
      user: DATABASE_USERNAME_PRODUCTION,
      host: DATABASE_HOST_PRODUCTION,
      database: DATABASE_NAME_PRODUCTION,
      password: DATABASE_PASSWORD_PRODUCTION,
      port: DATABASE_PORT_PRODUCTION,
    });
  }
  return null;
};

export default connect;
