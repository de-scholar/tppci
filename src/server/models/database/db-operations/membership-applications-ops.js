import connect from '../configs/connectToDb';
import {
  ADD_NEW_APPLICATION,
  CHECK_EMAIL_FROM_TABLE_APPLICATIONS,
  GET_ALL_APPLICATIONS,
  GET_UNREPLIED_APPLICATIONS,
  GET_REPLIED_APPLICATIONS,
  GET_UNCONFIRMED_APPLICATIONS,
  GET_CONFIRMED_APPLICATIONS,
} from '../configs/SQLqueries';

export const addNewMembershipApplication = (req, res, next) => {
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

  // before sending data to the db, i need to check if the form is valid
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
    false,
    false,
  ], (err) => {
    if (err) {
      res.status(500).json({ error: err });
    }
    res.status(201).send(`Dear ${fname},

      Thank you for applying to be part of the TPPCI Fellowship.
      We're excited that you're interested in joining our movement
      to build a  world free from teenages pregnancy.
      This message is a follow-up to your application.

      The feedback and next steps will be sent to you on ${email},
      so please look out for an email from us.

      Further communication would be sent to you upon successful
      application process.`);
  });
  next();
};

export const checkIfEmailExistsFromTableApplications = (req, res) => {
  const { email } = req.body;
  connect().query(CHECK_EMAIL_FROM_TABLE_APPLICATIONS, [email], (err, results) => {
    if (err) {
      throw err;
    }
    res.status(200).json(results.rows[0].exists);
  });
};

/** GETTING ALL MEMBERSHIP APPLICATIONS */
export const getAllMembershipApplications = (req, res) => {
  connect().query(GET_ALL_APPLICATIONS, (err, results) => {
    if (err) {
      console.log(err);
      res.status(500).send('Something went wrong in the server, please try again!');
    }
    const foundApps = results.rows;
    if (foundApps.length !== 0) {
      res.status(200).send(foundApps);
    } else if (foundApps.length === 0) {
      res.status(204).send('No application found');
    } else {
      res.status(400).send('Try again please!');
    }
  });
};

/** GETTING UNREPLIED APPLICATIONS */
export const getUnRepliedApplications = (req, res) => {
  connect().query(GET_UNREPLIED_APPLICATIONS, (err, results) => {
    if (err) {
      res.status(500).send('Something is not right, refresh your page and retry!');
    }
    const foundUnReplieds = results.rows;
    if (foundUnReplieds.length !== 0) {
      res.status(200).send(foundUnReplieds);
    } else if (foundUnReplieds.length === 0) {
      res.status(204).send('It seems all the applications, have been replied or there is no application avilable!');
    } else {
      res.status(500).send('Something is not right, try again!');
    }
  });
};

/** GETTING REPLIED APPLICATIONS */
export const getRepliedApplications = (req, res) => {
  connect().query(GET_REPLIED_APPLICATIONS, (err, results) => {
    if (err) {
      res.status(500).send('Something is not okay, refresh and retry again!');
    }
    const foundReplieds = results.row;
    if (foundReplieds.length !== 0) {
      res.status(200).send(foundReplieds);
    } else if (foundReplieds.length === 0) {
      res.status(204).send('No replied applications found!');
    } else {
      res.status(500).send('Something is not right, retry again!');
    }
  });
};

export const getUnConfirmedApplications = (req, res) => {
  connect().query(GET_UNCONFIRMED_APPLICATIONS, (err, results) => {
    if (err) {
      res.status(500).send('Something is not right, refresh and try again!');
    }
    const foundUnConfirmeds = results.rows;
    if (foundUnConfirmeds.length !== 0) {
      res.status(200).send(foundUnConfirmeds);
    } else if (foundUnConfirmeds.length === 0) {
      res.status(204).send('No Unconfirmed applications');
    } else {
      res.status(500).send('Some error occured, please be patient and try again!');
    }
  });
};

export const getConfirmedApplications = (req, res) => {
  connect().query(GET_CONFIRMED_APPLICATIONS, (err, results) => {
    if (err) {
      res.status(500).send('Some error occured please try again!');
    }
    const foundConfirmeds = results.rows;
    if (foundConfirmeds.length !== 0) {
      res.status(200).send(foundConfirmeds);
    } else if (foundConfirmeds.length === 0) {
      res.status(204).send('No confirmed applications found!');
    } else {
      res.status(500).send('Some error occured, please try again!');
    }
  });
};
