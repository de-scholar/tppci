import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import connect from '../configs/connectToDb';
import { ADD_NEW_USER, CHECK_EMAIL_FROM_TABLE_USERS, GET_USER_BY_EMAIL } from '../configs/SQLqueries';
import { validateLoginForm } from '../../../middlewares/validations';
import { checkPassword } from '../../../middlewares/hashing';

dotenv.config();
export const addNewUser = (req, res) => {
  const {
    fname,
    middle_name,
    lname,
    country_residence,
    occupation,
    date_of_birth,
    email,
    phone_number,
    password,
    user_registered_at,
    user_authorities,
  } = req.body;

  connect().query(ADD_NEW_USER, [
    fname,
    middle_name,
    lname,
    country_residence,
    occupation,
    new Date(date_of_birth),
    email,
    phone_number,
    password,
    user_registered_at,
    user_authorities,
  ], (err) => {
    if (err) {
      throw err;
    }
    res.status(200).send('User registered successfully!');
  });
};

export const checkIfEmailExistsFromTableUsers = (req, res) => {
  const { email } = req.body;
  connect().query(CHECK_EMAIL_FROM_TABLE_USERS, [email], (err, results) => {
    if (err) {
      throw err;
    }
    res.status(200).json(results.rows[0].exists);
  });
};

export const checkUserLogin = (req, res) => {
  const { email, password } = req.body;

  connect().query(GET_USER_BY_EMAIL, [email], (err, results) => {
    if (err) {
      res.status(500).send('Something is wrong, please try again!');
    }
    const foundUser = results.rows[0];
    if (foundUser) {
      const hashedKey = foundUser.password;
      if (checkPassword(password, hashedKey)) {
        /** HERE THE USER IS THERE AND THE PASSWORD IS TRUE */
        const userInfoToSend = {
          user_id: foundUser.user_id,
          fname: foundUser.fname,
          middle_name: foundUser.middle_name,
          lname: foundUser.lname,
          country_residence: foundUser.country_residence,
          occupation: foundUser.occupation,
          date_of_birth: foundUser.user_registered_at,
          email: foundUser.email,
          phone_number: foundUser.phone_number,
          user_registered_at: foundUser.user_registered_at,
          user_authorities: foundUser.user_authorities,
        };
        const token = jwt.sign(
          userInfoToSend,
          'mugirase',
          {
            expiresIn: '90 days',
          },
        );
        res.status(200).json({ login: true, token });
      } else {
        res.status(404).send('Sorry! Your password is wrong!');
      }
    } else {
      res.status(404).send(`The user with email : ${email} doesn't exist, you can apply for membership!`);
    }
  });
};
