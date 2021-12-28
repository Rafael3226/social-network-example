import mongoose from 'mongoose';
import { env } from 'process';

mongoose.connect(env.MONGO_URL || '');

const MongoConnection = mongoose.connection;

export default MongoConnection;
