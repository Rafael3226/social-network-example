import mongoose, { Schema, Document } from 'mongoose';

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

const UserModel = mongoose.connection.model('user', UserSchema);

export default UserModel;
