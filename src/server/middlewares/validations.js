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

export const validateUser = () => { };
