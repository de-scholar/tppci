export const validateApplicationForm = (
  fname,
  country_residence,
  occupation,
  date_of_birth,
  email,
  phone_number,
  motivation,
  res,
) => {
  if (fname.length === 0) {
    res.send('Please enter your family name!');
    return false;
  } if (country_residence.length === 0) {
    res.send('Please select your country of residence!');
    return false;
  } if (occupation.length === 0) {
    res.send('You didn\'t specify your occupation');
    return false;
  } if (date_of_birth.length === 0) {
    res.send('Please enter your date of birth');
    return false;
  } if (email.length === 0) {
    res.send('Enter your email please!');
    return false;
  } if (phone_number.length === 0) {
    res.send('Enter your phone number');
    return false;
  } if (motivation.length < 3 || motivation.length > 255) {
    res.send('A valid motivation should have at least 3 characters');
    return false;
  }
  return true;
};

export const validateLoginForm = (email, password, next) => {
  const emailRegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (email.match(emailRegExp)) {
    if (password.length !== 0) {
      return true;
    }
    return false;
  }
  return false;
};
