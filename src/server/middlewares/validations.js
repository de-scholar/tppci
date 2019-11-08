export const validateApplicationForm = (req, res, next) => {
  const {
    fname,
    country_residence,
    occupation,
    date_of_birth,
    email,
    phone_number,
    motivation,
  } = req.body;
  if (fname.length === 0) {
    res.send('Please enter your family name!');
  } if (country_residence.length === 0) {
    res.send('Please select your country of residence!');
  } if (occupation.length === 0) {
    res.send('You didn\'t specify your occupation');
  } if (date_of_birth.length === 0) {
    res.send('Please enter your date of birth');
  } if (email.length === 0) {
    res.send('Enter your email please!');
  } if (phone_number.length === 0) {
    res.send('Enter your phone number');
  } if (motivation.length < 3 || motivation.length > 255) {
    res.send('A valid motivation should have at least 3 characters');
  }
  next();
};

export const validateLoginForm = (req, res, next) => {
  console.log(req.body);
  const { email, password } = req.body;
  const emailRegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (email.match(emailRegExp) && password.length !== 0) {
    next();
  } else {
    res.status(400).send('You entered an invalid email, or your password is not captured well!');
  }
};
