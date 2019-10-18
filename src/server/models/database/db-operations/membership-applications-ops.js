import connect from '../configs/connectToDb';
import { ADD_NEW_APPLICATION } from '../configs/SQLqueries';

const addNewMembershipApplication = (req, res) => {
  const {
    fname,
    middle_name,
    lname,
    country_residence,
    occupation,
    date_of_birth,
    email,
    phone_number,
    motivation,
  } = req.body;
  console.log(req.body);
  connect.query(ADD_NEW_APPLICATION, [
    fname,
    middle_name,
    lname,
    country_residence,
    occupation,
    new Date(date_of_birth),
    email,
    phone_number,
    motivation,
  ], (err) => {
    if (err) {
      throw err;
    }
    res.status(200).send(`You will receive feedback on ${email} to ASAP!`);
  });
};

export default addNewMembershipApplication;
