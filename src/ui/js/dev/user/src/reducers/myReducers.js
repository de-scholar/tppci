import {
  GET_ERRORS, GET_USER_INFO, GET_ALL_APPLICATIONS,
} from '../actions/types';

const initialState = {};
export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ERRORS:
      return {
        ...state, error: action.payload,
      };

    case GET_USER_INFO:
      return {
        ...state, loggedInUserInfo: action.payload,
      };

    case GET_ALL_APPLICATIONS:
      return {
        ...state, gottenApplications: action.payload,
      };
    default:
      return state;
  }
}
