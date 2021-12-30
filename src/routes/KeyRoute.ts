import { Router } from 'express';
import { env } from 'process';
import { Request, Response } from 'express';

class KeyRoute {
  private router: Router = Router();

  public constructor() {
    this.config();
  }

  private config(): void {
    this.router.get('/firebase', this.getApiKey);
  }
  private getApiKey(req: Request, res: Response) {
    res.send(env.FIREBASE_KEY);
  }
  public getRouter(): Router {
    return this.router;
  }
}

const KeyRouter = new KeyRoute().getRouter();

export default KeyRouter;
