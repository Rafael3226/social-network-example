import express from 'express';
import cors from 'cors';
import * as dotenv from 'dotenv';
import { env } from 'process';
import PostRouter from './routes/PostRoute';
import UserRouter from './routes/UserRoute';
import mongoose, { Mongoose } from 'mongoose';

// Initialization
const app = express();
dotenv.config();
// Settings

app.set('port', env.PORT || 5000);

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/post', PostRouter);
app.use('/user', UserRouter);

// Mongo DB
if (env.MONGO_URL) {
  mongoose
    .connect(env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName: 'social',
    })
    .then((m: Mongoose) =>
      console.log(`Mongo DB connected on port ${m.connection.port}`)
    )
    .catch((e: Error) => console.error(e.message));
} else {
  console.error('No se encuentra MONGO_URL en las variables de entrono');
}

// Starting the erver
app.listen(app.get('port'), () => {
  console.log('The application is listening on port ', app.get('port'));
});
