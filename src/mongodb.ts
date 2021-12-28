import mongoose from 'mongoose';
import { env } from 'process';

mongoose
  .createConnection(env.MONGO_URL || '', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .catch((err: Error) => console.error(err));

const MongoConnection = mongoose.connection;

export default MongoConnection;
