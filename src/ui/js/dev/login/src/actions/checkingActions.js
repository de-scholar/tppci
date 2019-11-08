import axios from 'axios';
import {
  CHECK_IF_EMAIL_EXISTS_FROM_USERS,
  GET_ERRORS,
  CHECK_IF_EMAIL_EXISTS_FROM_APPLICATIOS,
} from './types';

export const checkEmailFromUsers = (email) => (dispatch) => {
  axios.post('/users/check-email-from-users', email).then((res) => {
    dispatch({
      type: CHECK_IF_EMAIL_EXISTS_FROM_USERS,
      payload: res.data,
    });
  }).catch((err) => {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data,
    });
  });
};

export const checkEmailFromApplications = (email) => (dispatch) => {
  axios.post('/membership-apply/check-email-from-applications', email).then((res) => {
    dispatch({
      type: CHECK_IF_EMAIL_EXISTS_FROM_APPLICATIOS,
      payload: res.data,
    });
  }).catch((err) => {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data,
    });
  });
};
