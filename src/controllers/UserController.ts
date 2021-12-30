import { Request, Response } from 'express';
import UserModel from '../models/UserModel';

class UserController {
  public static async create(req: Request, res: Response) {
    try {
      const { name, email, password, image } = req.body;
      const user = await UserModel.create({ name, email, password, image });
      res.send(user);
    } catch (e: any) {
      res.send({ message: e.message });
    }
  }
  public static async getById(req: Request, res: Response) {
    try {
      const { id } = req.query;
      const user = await UserModel.findById(id);
      res.send(user);
    } catch (e: any) {
      res.send({ message: e.message });
    }
  }
  public static async list(req: Request, res: Response) {
    try {
      const user = await UserModel.find();
      res.send(user);
    } catch (e: any) {
      res.send({ message: e.message });
    }
  }
  public static async update(req: Request, res: Response) {
    try {
      const {
        query: { id },
        body: { name, email, password, image },
      } = req;
      const user = await UserModel.findByIdAndUpdate(id, {
        name,
        email,
        password,
        image,
      });
      res.send(user);
    } catch (e: any) {
      res.send({ message: e.message });
    }
  }
  public static async delete(req: Request, res: Response) {
    try {
      const { id } = req.query;
      const user = await UserModel.findByIdAndDelete(id);
      res.send(user);
    } catch (e: any) {
      res.send({ message: e.message });
    }
  }
}

export default UserController;
