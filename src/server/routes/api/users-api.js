import Router from 'express';
import models from '../../models';

const usersApi = Router();

usersApi.post('/add-new-user', models.addNewUser);
usersApi.post('/check-email-from-users', models.checkIfEmailExistsFromTableUsers);
usersApi.post('/login', models.checkUserLogin);

export default usersApi;
