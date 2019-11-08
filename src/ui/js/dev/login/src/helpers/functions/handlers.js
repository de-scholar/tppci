/* eslint-disable no-plusplus */
import countryCodes from 'country-data';
import { validateDateOfBirth } from './validations';

/** DATES AND TIMES */
export const handleDateOfBirth = (dateOfBirth) => {
  if (validateDateOfBirth(dateOfBirth)) {
    if (dateOfBirth.includes('/')) {
      return dateOfBirth.replace('/', '-');
    }
    if (dateOfBirth.includes('.')) {
      return dateOfBirth.replace('.', '-');
    }
  }
  return 'Enter date please!';
};

export const handleCurrDate = () => {
  const today = new Date();
  const currYear = today.getFullYear();
  const currMonth = today.getMonth() + 1;
  const currDate = today.getDate();

  return `${currYear}-${currMonth}-${currDate}`;
};

export const handleCurrDateTime = () => {
  const currTime = new Date();
  const hours = currTime.getHours();
  const minutes = currTime.getMinutes();
  const secs = currTime.getSeconds();
  const currDate = handleCurrDate();

  return `${currDate} ${hours}:${minutes}:${secs}`;
};

/** MOTIVATION */
export const handleMotivation = (motivationField, motivationInfoArea, component) => {
  const motivationText = motivationField.value;
  const motivationInfoField = motivationInfoArea;
  let counter = 255;

  if (motivationText.length >= 3 && motivationText.length < 255) {
    motivationInfoField.classList.remove('text-danger');
    motivationInfoField.classList.add('text-success');
    counter -= motivationText.length;
    motivationInfoField.innerHTML = counter;
    component.setState({ motivation: motivationText });
  } else if (motivationText.length < 3) {
    motivationInfoField.innerHTML = 'A valid motivation must have atleast 3 characters!';
    motivationInfoField.classList.remove('text-success');
    motivationInfoField.classList.add('text-danger');
  } else if (motivationText.length >= 255) {
    motivationInfoField.innerHTML = 'A valid motivation must not be longer than 254 characters!';
    motivationInfoField.classList.remove('text-success');
    motivationInfoField.classList.add('text-danger');
  } else {
    motivationInfoField.innerHTML = 'Invalid action, refresh the page because something is wrong!!!';
  }
};

/** HANDLE FIELD TYPING */
export const handleTyping = (event, component) => {
  component.setState({ [event.target.name]: event.target.value });
};

/** HANDLE COUNTRY SELECTION */
export const handleSelectCountry = (selectCountryNameField) => {
  const { countries } = countryCodes;
  const allCountries = countries.all;

  const selectCountryName = selectCountryNameField;

  for (let i = 0; i < allCountries.length; i++) {
    const countryOption = document.createElement('option');
    countryOption.value = allCountries[i].name;
    countryOption.text = allCountries[i].name;
    selectCountryName.add(countryOption);
  }
};

/** HANDLE COUNTRY SELECTION CHANGE */
export const handleCountrySelecting = (selectCountryNameField, countryCodeField, component) => {
  const selectedCountryName = selectCountryNameField.value;
  const countryCodeInputField = countryCodeField;
  const { countries } = countryCodes;
  const allCountries = countries.all;
  component.setState({ country: selectedCountryName });
  for (let i = 0; i < allCountries.length; i++) {
    if (selectedCountryName === allCountries[i].name) {
      countryCodeInputField.value = allCountries[i].countryCallingCodes;
    }
  }
};

/** HANDLE PHONE AND CODE FOCUS */
export const handlePhoneFieldFocus = (formErrorInfoSpan, PHONE_INFO) => {
  const formErrorField = formErrorInfoSpan;
  formErrorField.innerHTML = PHONE_INFO;
};
/** HANDLE PHONE BLUR */
export const handlePhoneFieldBlur = (event, formErrorInfoSpan, component) => {
  const formErrorField = formErrorInfoSpan;
  const inputedValue = event.target.value;
  if (inputedValue === '') {
    component.setState({ phone: '', phoneCode: '' });
    formErrorField.innerHTML = 'invalid phone number';
  } else {
    formErrorField.innerHTML = '';
  }
};
/** HANDLE PHONECODE BLUR */
export const handlePhoneCodeFieldBlur = (event, formErrorInfoSpan, component) => {
  const formErrorField = formErrorInfoSpan;
  const inputedValue = event.target.value;
  if (inputedValue === '') {
    component.setState({ phoneCode: '', phone: '' });
    formErrorField.innerHTML = 'invalid phone-code';
  } else {
    formErrorField.innerHTML = '';
  }
};
