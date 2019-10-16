/** CREATION AND OPERATIONS ON TABLES */

/** 1. TABLE USERS */
export const CREATE_TABLE_USERS = 'DROP TABLE IF EXISTS users CASCADE; '
    + 'CREATE TABLE IF NOT EXISTS users ('
    + 'user_id SERIAL PRIMARY KEY, '
    + 'fname VARCHAR(255),'
    + 'middle_name VARCHAR(255),'
    + 'lname VARCHAR(255),'
    + 'country_residence VARCHAR(255),'
    + 'occupation VARCHAR(50),'
    + 'date_of_birth DATE,'
    + 'email VARCHAR(50),'
    + 'phone_number VARCHAR(13),'
    + 'username VARCHAR(50),'
    + 'password VARCHAR(255),'
    + 'user_registered_at timestamp);';

export const ADD_NEW_USER = 'INSERT INTO users ('
    + ' fname,'
    + ' middle_name,'
    + ' lname,'
    + ' country_residence,'
    + ' occupation,'
    + ' date_of_birth,'
    + ' email,'
    + ' phone_number'
    + ' username,'
    + ' password,'
    + ' user_registered_at)'
    + 'VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11)';


/** ============================================================================= */

/** 2. TABLE WELCOME_MESSAGES TABLE */
export const CREATE_TABLE_WELCOME_MSGS = 'DROP TABLE IF EXISTS welcome_messages CASCADE; '
    + 'CREATE TABLE IF NOT EXISTS '
    + 'welcome_messages ('
    + 'message_id SERIAL PRIMARY KEY, '
    + 'message_title VARCHAR(255),'
    + 'message_content VARCHAR(255),'
    + 'message_created_at timestamp,'
    + 'message_updated_at timestamp,'
    + 'message_created_by int,'
    + 'message_edited_by int,'
    + 'CONSTRAINT fk_wlcmmssgs_users FOREIGN KEY(message_created_by) REFERENCES users(user_id));';

export const ADD_NEW_WELCOME_MESSAGE = 'INSERT INTO welcome_messages ('
    + 'message_title,'
    + 'message_content,'
    + 'message_created_at,'
    + 'message_updated_at,'
    + 'message_added_by,'
    + 'message_edited_by)'
    + 'VALUES($1,$2,$3,$4,$5,$6)';
