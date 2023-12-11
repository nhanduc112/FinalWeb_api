import express from 'express';

import cors from 'cors';
import posts from './routers/posts.js';
import mongoose from 'mongoose';

const URI = 'mongodb+srv://20521204:1944838403@cluster0.mjw8tqk.mongodb.net/?retryWrites=true&w=majority'

const app = express();
const PORT = process.env.PORT || 3000;

mongoose
  .connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to DB');
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log('err', err);
  });

