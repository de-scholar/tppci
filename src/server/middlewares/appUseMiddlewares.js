import tableCreation from './migrations-middleware';
import routes from '../routes';

const useMiddleWares = (app, express) => {
  app.use(express.json());
  app.use('/refresh-tables', tableCreation);

  app.use('/', routes.myUrls);
  app.use('/membership-apply', routes.applyApi);
  app.use('/users', routes.usersApi);
  app.use('/welcome-messages', routes.wlcmMsgsApi);
};
export default useMiddleWares;
