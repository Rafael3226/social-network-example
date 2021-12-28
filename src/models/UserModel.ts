import { Schema, Document } from 'mongoose';
import MongoConnection from '../mongodb';

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  image: string;
}

const UserSchema: Schema = new Schema({
  name: String,
  email: String,
  password: String,
  image: String,
});

const UserModel = MongoConnection.model('user', UserSchema);

export default UserModel;
