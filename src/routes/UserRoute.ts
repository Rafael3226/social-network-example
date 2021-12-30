import { Router } from 'express';
import UserController from '../controllers/UserController';

class UserRoutes {
  private router: Router = Router();

  constructor() {
    this.config();
  }

  config(): void {
    this.router.post('/create', UserController.create);
    this.router.get('/list', UserController.list);
    this.router.get('/get', UserController.getById);
    this.router.put('/update', UserController.update);
    this.router.delete('/delete', UserController.delete);
    this.router.post('/login', UserController.login);
  }
  getRouter(): Router {
    return this.router;
  }
}

const UserRouter = new UserRoutes().getRouter();

export default UserRouter;
