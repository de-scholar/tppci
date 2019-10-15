import express from 'express';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT;

app.set('view engine', 'pug');
app.use(express.json());
app.use('/js', express.static(path.join(__dirname, '../ui/js/build')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../ui/html/index.html'));
});

app.listen(port, () => {
  console.log(`listening to port ${port}`);
});
