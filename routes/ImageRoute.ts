import { Router } from 'express';
import ImageController from '../controllers/ImageController';

class ImageRoutes {
  private router: Router = Router();

  constructor() {
    this.config();
  }

  config(): void {
    this.router.post('/save', ImageController.save);
    this.router.post('/delete', ImageController.delete);
  }
  getRouter(): Router {
    return this.router;
  }
}

const ImageRouter = new ImageRoutes().getRouter();

export default ImageRouter;
