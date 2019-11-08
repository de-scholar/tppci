import axios from 'axios';
import { GET_ALL_APPLICATIONS, GET_ERRORS } from './types';

export const getAllApplications = () => (dispatch) => {
  const auth = `Bearer ${window.localStorage.getItem('authentication')}`;
  const reqUrl = '/membership-apply/private/getting-unconfirmed-membership-applications';
  axios.get(reqUrl, { headers: { authorization: auth } }).then((res) => {
    dispatch({
      type: GET_ALL_APPLICATIONS,
      payload: res.data,
    });
  }).catch((err) => {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data,
    });
  });
};

export const descholar = () => { };
