import express from 'express';
import cors from 'cors';
import { env } from 'process';

// Initialization
const app = express();

// Settings
app.set('port', env.PORT || 5000);

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes

// Starting the erver
app.listen(app.get('port'), () => {
  console.log('The application is listening on port ', app.get('port'));
});
