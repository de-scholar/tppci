import Router from 'express';
import models from '../../models';

const applyApi = Router();

applyApi.post('/add-new-membership-application', models.addNewMembershipApplication);
applyApi.post('/check-email-from-applications', models.checkIfEmailExistsFromTableApplications);

export default applyApi;
