import Router from 'express';
import models from '../../models';
import { auth } from '../../middlewares/auth';
import { validateApplicationForm } from '../../middlewares/validations';

const applyApi = Router();

applyApi.post('/add-new-membership-application', validateApplicationForm, models.addNewMembershipApplication);
applyApi.post('/check-email-from-applications', models.checkIfEmailExistsFromTableApplications);
applyApi.get('/private/getting-all-membership-applications', auth, models.getAllMembershipApplications);
applyApi.get('/private/getting-replied-membership-applications', auth, models.getRepliedApplications);
applyApi.get('/private/getting-unreplied-membership-applications', auth, models.getUnRepliedApplications);
applyApi.get('/private/getting-confirmed-membership-applications', auth, models.getConfirmedApplications);
applyApi.get('/private/getting-unconfirmed-membership-applications', auth, models.getUnConfirmedApplications);

export default applyApi;
