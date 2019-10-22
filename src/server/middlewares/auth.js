import jwt from 'jsonwebtoken';

export const auth = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, process.env.JWT_PRIVATE_KEY);
    console.log(decodedToken);
    req.authenticatedUser = decodedToken;
    next();
  } catch (err) {
    res.status(401).send('You are not allowed to acces this page');
  }
};
export const authRedirect = (req, res, next) => {
  try {
    const { authentication } = req.query;
    const decodedToken = jwt.verify(authentication, 'mugirase');
    req.authenticatedUser = decodedToken;
    next();
  } catch (err) {
    res.status(401).send('You are not allowed to acces this page');
  }
};

export const descholar = () => { };
