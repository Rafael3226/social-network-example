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
      const post = await PostModel.find();
      res.send(post);
    } catch (e: any) {
      res.send({ message: e.message });
    }
  }
  public static async update(req: Request, res: Response) {
    try {
      const {
        query: { id },
        body: { user, description, likes, comments },
      } = req;
      const post = await PostModel.findByIdAndUpdate(id, {
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
