
export const validateFname = (fname) => {
  const letters = /^[A-Za-z]+$/;
  if (!fname.match(letters)) {
    return false;
  }
  return true;
};

export const validateCountry = (country) => {
  if (country.length === 0) {
    return false;
  }
  return true;
};

export const validateOccupation = (occupation) => {
  if (occupation.length === 0) {
    return false;
  }
  return true;
};

export const validateDateOfBirth = (dateOfBirth) => {
  if (dateOfBirth.length === 0) {
    return false;
  }
  return true;
};

export const validateEmail = (mail) => {
  const mailRegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!mail.match(mailRegExp)) {
    return false;
  }
  return true;
};

export const validatePhoneNumber = (phoneNumber) => {
  if (phoneNumber.length === 0) {
    return false;
  }
  return true;
};

export const validateMotivation = (motivation) => {
  if (motivation.length < 3 || motivation >= 255) {
    return false;
  }
  return true;
};

/** VALIDATION OF APPLICATION FORM */
export const validateApplicationForm = (
  fname,
  country,
  occupation,
  dateOfBirth,
  email,
  phoneNumber,
  motivation,
  formErrorInfoSpan,
) => {
  const formError = formErrorInfoSpan;
  if (validateFname(fname)) {
    formError.innerHTML = '';
    if (validateCountry(country)) {
      formError.innerHTML = '';
      if (validateOccupation(occupation)) {
        formError.innerHTML = '';
        if (validateDateOfBirth(dateOfBirth)) {
          formError.innerHTML = '';
          if (validateEmail(email)) {
            if (validatePhoneNumber(phoneNumber)) {
              formError.innerHTML = '';
              if (validateMotivation(motivation)) {
                formError.innerHTML = '';

                return true;
              }
              formError.innerHTML = 'Please enter a valid motivation, make sure it meets all requirements written below motivation field!';
              return false;
            }
            formError.innerHTML = 'Please enter a valid Phone number!';
            return false;
          }
          formError.innerHTML = 'Please enter a valid email!';
          return false;
        }
        formError.innerHTML = 'Please enter a valid date of birth!';
        return false;
      }
      formError.innerHTML = 'Please enter your occupation!';
      return false;
    }
    formError.innerHTML = 'Please select a valid country name of your residence!';
    return false;
  }
  formError.innerHTML = 'The family name you put is invalid!';
  return false;
};
