import connect from '../configs/connectToDb';
import { ADD_NEW_USER, CHECK_EMAIL_FROM_TABLE_USERS } from '../configs/SQLqueries';

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
  console.log(req.body);
  connect().query(CHECK_EMAIL_FROM_TABLE_USERS, [email], (err, results) => {
    if (err) {
      throw err;
    }
    res.status(200).json(results.rows[0].exists);
  });
};
