import express from 'express';
import cors from 'cors';
import * as dotenv from 'dotenv';
import { env } from 'process';
import PostRouter from './routes/PostRoute';
import UserRouter from './routes/UserRoute';
import setUpMongo from './mongo';
import ImageRouter from './routes/ImageRoute';

// Initialization
const app = express();
dotenv.config();

// Mongo DB
setUpMongo();

// Settings
app.set('port', env.PORT || 5000);

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/post', PostRouter);
app.use('/user', UserRouter);
app.use('/image', ImageRouter);

// Starting the erver
app.listen(app.get('port'), () => {
  console.log('The application is listening on port ', app.get('port'));
});
