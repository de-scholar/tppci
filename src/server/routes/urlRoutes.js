import Router from 'express';
import path from 'path';

const myUrls = Router();

myUrls.get('/', (req, res) => {
  const indexPage = path.join(__dirname, '../../ui/html/index.html');
  res.sendFile(indexPage);
});

myUrls.get('/login', (req, res) => {
  const loginPage = path.join(__dirname, '../../ui/html/login.html');
  res.sendFile(loginPage);
});

export default myUrls;
