import { Router } from 'express';
import PostController from '../controllers/PostController';

class PostRoutes {
  private router: Router = Router();

  constructor() {
    this.config();
  }

  config(): void {
    this.router.post('/create', PostController.create);
    this.router.get('/read', PostController.read);
    this.router.put('/update', PostController.update);
    this.router.delete('/delete', PostController.delete);
  }
  getRouter(): Router {
    return this.router;
  }
}

const PostRouter = new PostRoutes().getRouter();

export default PostRouter;
