import Router from 'express';
import models from '../../models';
import { validateLoginForm } from '../../middlewares/validations';

const usersApi = Router();

usersApi.post('/add-new-user', models.addNewUser);
usersApi.post('/check-email-from-users', models.checkIfEmailExistsFromTableUsers);
usersApi.post('/login', validateLoginForm, models.checkUserLogin);

export default usersApi;
