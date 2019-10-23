import {
  addNewMembershipApplication,
  checkIfEmailExistsFromTableApplications,
  getAllMembershipApplications,
} from './database/db-operations/membership-applications-ops';

import {
  addNewUser,
  checkIfEmailExistsFromTableUsers,
  checkUserLogin,
} from './database/db-operations/user-ops';
import addNewWlcmMsg from './database/db-operations/wlcm-msg-ops';

export default {
  addNewMembershipApplication,
  addNewUser,
  checkUserLogin,
  addNewWlcmMsg,
  checkIfEmailExistsFromTableApplications,
  checkIfEmailExistsFromTableUsers,
  getAllMembershipApplications,
};
