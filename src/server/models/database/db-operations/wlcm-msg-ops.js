import { ADD_NEW_WELCOME_MESSAGE } from '../configs/SQLqueries';
import connect from '../configs/connectToDb';

const addNewWlcmMsg = (req, res) => {
  const {
    message_title,
    message_content,
    message_created_at,
    message_updated_at,
    message_added_by,
    message_edited_by,
  } = req.body;
  connect.query(ADD_NEW_WELCOME_MESSAGE, [
    message_title,
    message_content,
    new Date(message_created_at),
    new Date(message_updated_at),
    parseInt(message_added_by),
    parseInt(message_edited_by),
  ], (err) => {
    if (err) {
      throw err;
    }
    res.status(200).send('Welcome message added successfully!');
  });
};

export default addNewWlcmMsg;
