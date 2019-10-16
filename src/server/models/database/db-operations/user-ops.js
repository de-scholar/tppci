import connect from '../configs/connectToDb';
import { ADD_NEW_USER } from '../configs/SQLqueries';

const addNewUser = (req, res) => {
  const {
    fname,
    middle_name,
    lname,
    country_residence,
    occupation,
    date_of_birth,
    email,
    phone_number,
    username,
    password,
    user_registered_at,
    user_authorities,
  } = req.body;

  connect.query(ADD_NEW_USER, [
    fname,
    middle_name,
    lname,
    country_residence,
    occupation,
    new Date(date_of_birth),
    email,
    phone_number,
    username,
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

export default addNewUser;
