import { Request, Response } from 'express';

class PostController {
  public static async create(req: Request, res: Response) {
    try {
      const data = req.query;
      res.send('todo');
    } catch (e: unknown) {
      res.send({ message: e });
    }
  }
  public static async read(req: Request, res: Response) {
    try {
      const { id } = req.query;
      res.send('todo');
    } catch (e: unknown) {
      res.send({ message: e });
    }
  }
  public static async update(req: Request, res: Response) {
    try {
      const { id } = req.query;
      res.send('todo');
    } catch (e: unknown) {
      res.send({ message: e });
    }
  }
  public static async delete(req: Request, res: Response) {
    try {
      const { id } = req.query;
      res.send('todo');
    } catch (e: unknown) {
      res.send({ message: e });
    }
  }
}

export default PostController;
