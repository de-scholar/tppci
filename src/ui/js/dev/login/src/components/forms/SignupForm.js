/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';
import { Container, Row } from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import { submitApplication } from '../../actions/addingNewDataActions';
import { checkEmailFromApplications, checkEmailFromUsers }
  from '../../actions/checkingActions';
import {
  TPPCP_TITLE,
  APPLICATION_PROCESS_EXPLAINED,
  APPLICATION_FORM_EXPLAINED,
  APPLICATION_PROCESS_INSTRUCTIONS,
  TPPCP_SUMMARY_EXPLANATION,
  APPLICATION_STEP_ONE,
  APPLICATION_STEP_TWO,
  APPLICATION_STEP_THREE,
  PHONE_INSTRUCTIONS,
} from '../../app-strings/english-strings';
import {
  handleMotivation,
  handleTyping,
  handleSelectCountry,
  handleCountrySelecting,
  handlePhoneFieldFocus,
  handlePhoneFieldBlur,
  handlePhoneCodeFieldBlur,
} from '../../helpers/functions/handlers';
import { validateEmail, validateApplicationForm } from '../../helpers/functions/validations';

class SignupForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fname: '',
      midname: '',
      lname: '',
      country: '',
      occupation: '',
      email: '',
      phone: '',
      phoneCode: '',
      motivation: '',
      defaultDateOfBirth: new Date('1999-12-01'),
    };
    this.props = {
      dataFromDb: PropTypes.object.isRequired,
      submitApplication: PropTypes.func.isRequired,
      checkEmailFromApplications: PropTypes.func.isRequired,
      checkEmailFromUsers: PropTypes.isRequired,
    };
  }

  componentDidMount() {
    const sentAppInfoDiv = document.getElementById('sentAppInfoDiv');
    const applicationFormDiv = document.getElementById('applicationFormDiv');
    applicationFormDiv.classList.remove('hidden-div');
    sentAppInfoDiv.classList.add('hidden-div');
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps) {
      const { dataFromDb } = nextProps;
      const sentAppInfoDiv = document.getElementById('sentAppInfoDiv');
      const sentAppInfoSpan = document.getElementById('sentAppInfoSpan');
      const applicationFormDiv = document.getElementById('applicationFormDiv');
      const emailInfoField = document.getElementById('emailInfoField');
      if (dataFromDb !== undefined) {
        /** dealing with checking existance of emails */
        const { isEmailExistsFromUsers, isEmailExistsFromApplications } = dataFromDb;
        if (isEmailExistsFromUsers !== undefined && isEmailExistsFromUsers === true) {
          emailInfoField.innerHTML = 'There is a user with this email!';
          this.setState({ email: '' });
        } else if (isEmailExistsFromApplications !== undefined
          && isEmailExistsFromApplications === true) {
          emailInfoField.innerHTML = 'There is someone applied using this email!';
          this.setState({ email: '' });
        } else {
          emailInfoField.innerHTML = '';
        }

        /** dealing with response from adding new application */
        const data = dataFromDb.appAddInfo;
        if (data !== undefined) {
          sentAppInfoDiv.classList.remove('hidden-div');
          applicationFormDiv.classList.add('hidden-div');
          sentAppInfoSpan.innerHTML = data;
        }
      } else {
        console.log('sorry, something went wrong');
      }
    }
  }

  handleFieldTyping = (event) => {
    handleTyping(event, this);
  }

  handleCountrySelection = () => {
    const selectField = document.getElementById('selectCountryNameField');
    handleSelectCountry(selectField);
  }

  handleCountryIsSelected = () => {
    const selectField = document.getElementById('selectCountryNameField');
    const countryCodeField = document.getElementById('countryCode');
    handleCountrySelecting(selectField, countryCodeField, this);
  }

  handeSelectDateOfBirth = (date) => {
    this.setState({ defaultDateOfBirth: date });
  }

  handleEmailTyping = (event) => {
    const writtenEmail = event.target.value;
    this.setState({ email: writtenEmail });
    if (validateEmail(writtenEmail)) {
      const emailTosend = { email: writtenEmail };
      this.props.checkEmailFromApplications(emailTosend);
      this.props.checkEmailFromUsers(emailTosend);
    }
  }

  handlePhoneFocus = () => {
    const formErrorInfoSpan = document.getElementById('formErrorInfoSpan');
    handlePhoneFieldFocus(formErrorInfoSpan, PHONE_INSTRUCTIONS);
  }

  handlePhoneNumberTyping = (event) => {
    this.setState({ phone: event.target.value });
  }

  handlePhoneCodeTyping = (event) => {
    this.setState({ phoneCode: event.target.value });
  }

  handlePhoneBlur = (event) => {
    const formErrorInfoSpan = document.getElementById('formErrorInfoSpan');
    handlePhoneFieldBlur(event, formErrorInfoSpan, this);
  }

  handlePhoneCodeBlur = (event) => {
    const formErrorInfoSpan = document.getElementById('formErrorInfoSpan');
    handlePhoneCodeFieldBlur(event, formErrorInfoSpan, this);
  }

  handleMotivationTyping = () => {
    const motivationInfoField = document.getElementById('motivationInfoField');
    const motivationField = document.getElementById('motivationField');
    handleMotivation(motivationField, motivationInfoField, this);
  }

  handleSubmitForm = () => {
    const {
      fname,
      midname,
      lname,
      country,
      occupation,
      email,
      motivation,
    } = this.state;

    const phoneNumber = this.state.phoneCode + this.state.phone;
    const dateOfBirth = document.getElementById('dateOfBirth').value;
    const formErrorInfoSpan = document.getElementById('formErrorInfoSpan');
    const validateApplication = validateApplicationForm(
      fname,
      country,
      occupation,
      dateOfBirth,
      email,
      phoneNumber,
      motivation,
      formErrorInfoSpan,
    );
    if (validateApplication) {
      const dataToSubmit = {
        fname,
        middle_name: midname,
        lname,
        country_residence: country,
        occupation,
        date_of_birth: dateOfBirth,
        email,
        phone_number: phoneNumber,
        motivation,
      };
      this.props.submitApplication(dataToSubmit);
    }
  }


  render() {
    return (
      <Container>
        <Row>
          <div
            className="hidden-div margin-top-25 padding-15 rounded-corners text-center width-60 black-bordered-element black-transparent-element"
            id="sentAppInfoDiv"
          >
            <span className="text-success text-22" id="sentAppInfoSpan" />
          </div>
        </Row>
        <Row
          id="applicationFormDiv"
          className="shadows mb-5 mt-5 width-98 text-white black-bordered-element black-transparent-element rounded-corners padding-15"
        >
          <div className="col-md-8">
            <div className="text-center text-17">
              <h4>
                <strong>{TPPCP_TITLE}</strong>
              </h4>
              <br />
              {TPPCP_SUMMARY_EXPLANATION}
              <br />
              <br />
              {APPLICATION_PROCESS_EXPLAINED}

              <br />
              <br />
              <strong>Step one : </strong>
              <br />
              {APPLICATION_STEP_ONE}
              <br />
              <br />
              <strong>Step two:</strong>
              <br />
              {APPLICATION_STEP_TWO}
              <br />
              <br />
              <strong>Final step:</strong>
              <br />
              {APPLICATION_STEP_THREE}
              <br />
              <br />
              {APPLICATION_FORM_EXPLAINED}
              <br />
              <br />
              <strong>INSTRUCTIONS :</strong>
              {APPLICATION_PROCESS_INSTRUCTIONS}

            </div>
          </div>
          <div className="col-md-4 application-form">
            <div className="margin-top-25">

              <hr />
              <h3 className="text-center text-success">Application form</h3>
              <br />
              <div className="text-danger text-center">
                <span id="formErrorInfoSpan" />
              </div>
              <br />

              <div className="form-group form-row">
                <label
                  htmlFor="fname"
                  className="col-md-4 hand-cursor"
                >
                  Family name :
                </label>
                <input
                  type="text"
                  name="fname"
                  id="fname"
                  placeholder="eg.: KAMIKAZI"
                  className="col-md-8 form-control-sm form-control rounded-corners"
                  onChange={this.handleFieldTyping}
                />
              </div>
              <div>
                <span id="fnameInfoField" />
              </div>
              <div className="form-group form-row">
                <label
                  htmlFor="midname"
                  className="col-md-4 hand-cursor"
                >
                  Middle name :
                </label>
                <input
                  type="text"
                  name="midname"
                  id="midname"
                  placeholder="eg.: Anne"
                  className="col-md-8 form-control-sm form-control rounded-corners"
                  onChange={this.handleFieldTyping}
                />
              </div>
              <div className="form-group form-row">
                <label
                  htmlFor="lname"
                  className="col-md-4 hand-cursor"
                >
                  Last name :
                </label>
                <input
                  type="text"
                  name="lname"
                  id="lname"
                  placeholder="eg.: Maria"
                  className="col-md-8 form-control-sm form-control rounded-corners"
                  onChange={this.handleFieldTyping}
                />
              </div>
              <div className="form-group form-row">
                <label
                  htmlFor="selectCountryNameField"
                  className="col-md-4 hand-cursor"
                >
                  Country of residence :
                </label>
                <select
                  id="selectCountryNameField"
                  name="country"
                  className="col-md-8 custom-select custom-select-sm rounded-corners"
                  onFocus={this.handleCountrySelection}
                  onChange={this.handleCountryIsSelected}
                />
              </div>
              <div className="form-group form-row">
                <label
                  htmlFor="occupation"
                  className="col-md-4 hand-cursor"
                >
                  Occupation :
                </label>
                <input
                  type="text"
                  name="occupation"
                  id="occupation"
                  placeholder="eg.: Founder & CEO of Example Ltd"
                  className="col-md-8 form-control-sm form-control rounded-corners"
                  onChange={this.handleFieldTyping}
                />
              </div>
              <div>
                <span id="occupationInfoField" />
              </div>
              <div className="form-group form-row">
                <label
                  htmlFor="dateOfBirth"
                  className="col-md-4 hand-cursor"
                >
                  Date of birth :
                </label>
                <div className="col-md-8 form-control form-control-sm rounded-corners text-center">
                  <DatePicker
                    selected={this.state.defaultDateOfBirth}
                    onChange={this.handeSelectDateOfBirth}
                    dateFormat="yyyy-MM-dd"
                    id="dateOfBirth"
                    className="form-control form-control-sm"
                  />
                </div>
              </div>
              <div>
                <span id="dateOfBirthInfoField" />
              </div>
              <div className="form-group form-row">
                <label
                  htmlFor="email"
                  className="col-md-4 hand-cursor"
                >
                  Email :
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="eg.: you@example.com"
                  className="col-md-8 form-control-sm form-control rounded-corners"
                  onChange={this.handleEmailTyping}
                />
              </div>
              <div className="text-center text-danger">
                <span id="emailInfoField" />
              </div>
              <div className="form-group form-group form-row">
                <label
                  htmlFor="phone_number"
                  className="col-md-4 hand-cursor"
                >
                  Phone number :
                </label>
                <input
                  type="text"
                  name="phoneCode"
                  id="countryCode"
                  className="col-md-2 form-control-sm form-control rounded-left-top rounded-left-bottom"
                  onChange={this.handlePhoneCodeTyping}
                  onFocus={this.handlePhoneFocus}
                  onBlur={this.handlePhoneCodeBlur}
                />
                <input
                  type="number"
                  name="phoneNumber"
                  id="phone_number"
                  placeholder="eg.: 722 792 371"
                  className="col-md-6 form-control-sm form-control rounded-right-top rounded-right-bottom"
                  onChange={this.handlePhoneNumberTyping}
                  onFocus={this.handlePhoneFocus}
                  onBlur={this.handlePhoneBlur}
                />
              </div>
              <div>
                <span id="phoneInfoField" />
              </div>
              <div className="form-group form-row">
                <label
                  htmlFor="motivationField"
                  className="col-md-4 hand-cursor"
                >
                  What does motivate you to join TPPCI?
                </label>
                <textarea
                  rows="6"
                  cols="51"
                  name="motivation"
                  placeholder="eg.: I am interested to this project because ..."
                  className="col-md-8 rounded-corners"
                  id="motivationField"
                  onChange={this.handleMotivationTyping}
                />
              </div>
              <div className="text-center">
                <span id="motivationInfoField" />
              </div>
              <div>
                <button
                  type="button"
                  className="col-md-12 btn btn-block btn-info btn-sm rounded-corners"
                  onClick={this.handleSubmitForm}
                >
                  Send your application

                </button>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  dataFromDb: state.myReducers,
});
export default connect(
  mapStateToProps,
  {
    submitApplication,
    checkEmailFromApplications,
    checkEmailFromUsers,
  },
)(SignupForm);
