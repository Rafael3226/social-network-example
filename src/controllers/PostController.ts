import { Request, Response } from 'express';
import PostModel, { IPost } from '../models/PostModel';

class PostController {
  public static async create(req: Request, res: Response) {
    try {
      const { user, description, likes, comments } = req.body;
      const post = await PostModel.create({
        user,
        description,
        likes,
        comments,
      });
      res.send(post);
    } catch (e: any) {
      res.send({ message: e.message });
    }
  }
  public static async getById(req: Request, res: Response) {
    try {
      const { id } = req.query;
      const post = await PostModel.findById(id);
      res.send(post);
    } catch (e: any) {
      res.send({ message: e.message });
    }
  }
  public static async list(req: Request, res: Response) {
    try {
      const post = await PostModel.find().sort({ createdAt: 'desc' });
      res.send(post);
    } catch (e: any) {
      res.send({ message: e.message });
    }
  }
  public static async feed(req: Request, res: Response) {
    try {
      const { _id } = req.query;
      const post = await PostModel.find({ 'user._id': _id }).sort({
        createdAt: 'desc',
      });
      res.send(post);
    } catch (e: any) {
      res.send({ message: e.message });
    }
  }
  public static async update(req: Request, res: Response) {
    try {
      const { _id, user, description, likes, comments } = req.body;
      const post = await PostModel.findByIdAndUpdate(
        _id,
        {
          user,
          description,
          likes,
          comments,
        },
        { useFindAndModify: true }
      );
      res.send(post);
    } catch (e: any) {
      res.send({ message: e.message });
    }
  }
  public static async comment(req: Request, res: Response) {
    try {
      const { _id, comment } = req.body;
      const post = await PostModel.findById(_id);
      post.comments.push(comment);
      await PostModel.findByIdAndUpdate(_id, post, { useFindAndModify: true });
      res.send(post);
    } catch (e: any) {
      res.send({ message: e.message });
    }
  }
  public static async delete(req: Request, res: Response) {
    try {
      const { id } = req.query;
      const post = await PostModel.findByIdAndDelete(id);
      res.send(post);
    } catch (e: any) {
      res.send({ message: e.message });
    }
  }
}

export default PostController;
