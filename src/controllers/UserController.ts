import { Request, Response } from 'express';
import UserModel, { IUser } from '../models/UserModel';

class UserController {
  public static async create(req: Request, res: Response) {
    try {
      let data, message;
      const { name, email, password, image } = req.body;
      const sameEmail: IUser = await UserModel.findOne({ email });
      if (sameEmail) {
        message = 'The email already exists';
      } else {
        data = await UserModel.create({ name, email, password, image });
      }
      res.send({ data, message });
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
      const { _id, name, email, password, image } = req.body;
      const user = await UserModel.findByIdAndUpdate(
        _id,
        {
          name,
          email,
          password,
          image,
        },
        { useFindAndModify: true }
      );
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
  public static async login(req: Request, res: Response) {
    try {
      let data, message;
      const { email, password } = req.body;
      const user = await UserModel.findOne({ email });
      if (user.password === password) {
        data = user;
      }
      res.send({ data, message });
    } catch (e: any) {
      res.send({ message: e.message });
    }
  }
}

export default UserController;
