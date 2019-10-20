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
  connect().query(ADD_NEW_APPLICATION, [
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
    res.status(200).send(`Dear ${fname},

    Thank you for applying to be part of the TPPCI Fellowship. 
    We're excited that you're interested in joining our movement 
    to build the best next generation of worlds' women teenages.
    This message is a follow-up to your application.
    
    The feedback and next steps will be sent to you on ${email},
    so please look out for an email from us.

    Further communication would be sent to you upon successful 
    application process.`);
  });
};

export default addNewMembershipApplication;
