import Router from 'express';
import models from '../../models';

const usersApi = Router();

usersApi.post('/add-new-user', models.addNewUser);

export default usersApi;
