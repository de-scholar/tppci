import Router from 'express';
import models from '../../models';
import { auth } from '../../middlewares/auth';

const applyApi = Router();

applyApi.post('/add-new-membership-application', models.addNewMembershipApplication);
applyApi.post('/check-email-from-applications', models.checkIfEmailExistsFromTableApplications);
applyApi.get('/private/getting-all-membership-applications', auth, models.getAllMembershipApplications);

export default applyApi;
