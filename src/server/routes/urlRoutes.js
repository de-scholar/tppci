import Router from 'express';
import path from 'path';
import { authRedirect } from '../middlewares/auth';

const myUrls = Router();

myUrls.get('/', (req, res) => {
  const indexPage = path.join(__dirname, '../../ui/views/index.pug');
  res.render(indexPage);
});

myUrls.get('/join-us', (req, res) => {
  const loginPage = path.join(__dirname, '../../ui/views/login.pug');
  res.render(loginPage);
});

myUrls.get('/auth-user', authRedirect, (req, res) => {
  const userPage = path.join(__dirname, '../../ui/views/user.pug');
  res.render(userPage, { fname: req.authenticatedUser.fname });
});

export default myUrls;
