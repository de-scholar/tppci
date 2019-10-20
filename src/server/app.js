import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import useMiddleWares from './middlewares/appUseMiddlewares';

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use('/js', express.static(path.join(__dirname, '../ui/js/build')));
app.use('/img', express.static(path.join(__dirname, '../ui/images')));
useMiddleWares(app, express);


app.listen(port, () => {
  console.log(`listening to port ${port}`);
});
