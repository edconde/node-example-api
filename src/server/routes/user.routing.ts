import * as express from 'express';
import { UserController } from '../controllers';

/**
 * Clase que genera el enrutado para el módulo del recurso usuarios
 */
export class UserRouter {
  private static router: express.Router;

  private constructor() {}

  /**
   * Devuelve una instancia singleton del enrutado del módulo de usuarios
   */
  public static getRouting(): express.Router {
    if (!UserRouter.router) {
      UserRouter.router = express.Router();
      UserRouter.routes();
    }
    return UserRouter.router;
  }

  /**
   * Asocia cada endpoint con el método a ejecutar del controlador correspondiente
   */
  private static routes(): void {
    const userController = new UserController();

    UserRouter.router.get('/', userController.get);
    UserRouter.router.post('/', userController.post);
    UserRouter.router.get('/:id', userController.getById);
    UserRouter.router.put('/:id', userController.put);
    UserRouter.router.delete('/:id', userController.delete);
  }
}
