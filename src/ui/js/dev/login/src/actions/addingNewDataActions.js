import axios from 'axios';
import {
  GET_ERRORS, ADD_NEW_APPLICATION_FORM, ADD_NEW_USER, LOGIN,
} from './types';

export const submitApplication = (appForm) => (dispatch) => {
  axios.post('/membership-apply/add-new-membership-application', appForm)
    .then((res) => {
      dispatch({
        type: ADD_NEW_APPLICATION_FORM,
        payload: res.data,
      });
    }).catch((err) => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      });
    });
};

export const submitNewUser = (newUser) => (dispatch) => {
  axios.post('', newUser)
    .then((res) => {
      dispatch({
        type: ADD_NEW_USER,
        payload: res.data,
      });
    }).catch((err) => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      });
    });
};

export const submitLoginForm = (loginInfo) => (dispatch) => {
  axios.post('/users/login', loginInfo).then((res) => {
    dispatch({
      type: LOGIN,
      payload: res.data,
    });
    /** redirecting to the user page */
    const gotenLoginInfo = res.data;
    if (gotenLoginInfo.login) {
      window.localStorage.setItem('authentication', gotenLoginInfo.token);
      window.location.replace(`/auth-user?authentication=${window.localStorage.getItem('authentication')}`);
    }
  }).catch((err) => {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data,
    });
  });
};
