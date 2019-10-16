import Router from 'express';
import models from '../../models';

const wlcmMsgsApi = Router();

wlcmMsgsApi.post('/add-new-welcome-message', models.addNewWlcmMsg);

export default wlcmMsgsApi;
