import Router from 'express';
import path from 'path';

const myUrls = Router();

myUrls.get('/', (req, res) => {
  const indexPage = path.join(__dirname, '../../ui/html/index.html');
  res.sendFile(indexPage);
});

myUrls.get('/join-us', (req, res) => {
  const loginPage = path.join(__dirname, '../../ui/html/login.html');
  res.sendFile(loginPage);
});

myUrls.get('/user', (req, res) => {
  const userPage = path.join(__dirname, '../../ui/html/user.html');
  res.sendFile(userPage);
});

export default myUrls;
