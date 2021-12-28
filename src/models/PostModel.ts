import { Schema, Document } from 'mongoose';
import MongoConnection from '../mongodb';
import { IUser } from './UserModel';

export interface IPost extends Document {
  user: IUser;
  description: string;
  likes: IUser[];
  comments: IComment[];
}
export interface IComment {
  user: IUser;
  description: string;
}

const PostSchema: Schema = new Schema({
  user: Object,
  description: String,
  likes: Array,
  comments: Array,
});

const PostModel = MongoConnection.model('post', PostSchema);

export default PostModel;
