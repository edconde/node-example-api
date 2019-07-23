import * as express from 'express';
import { AppLogger } from '../logger';
import { IUser } from '../models';
import { userService } from '../services';
import { IBaseController } from './base.controller';

export class UserController implements IBaseController {
  public constructor() {}

  /**
   * Consultar todos los usuarios
   * @param _req petición
   * @param _res respuesta
   */
  public async get(
    _req: express.Request,
    _res: express.Response
  ): Promise<void> {
    try {
      let users: IUser[];
      await userService
        .findAll()
        .then((data: IUser[]) => {
          users = data;
          _res.json(users);
        })
        .catch((error: Error) => {
          AppLogger.error(error);
        });
    } catch (exception) {
      AppLogger.error(exception);
    }
  }
  /**
   * Consultar un usuario por id
   * @param req petición
   * @param res respuesta
   */
  public async getById(
    _req: express.Request,
    _res: express.Response
  ): Promise<void> {
    try {
      const id = _req.params.id;
      await userService
        .findById(id)
        .then((data: IUser) => {
          _res.json(data);
        })
        .catch((error: Error) => {
          AppLogger.error(error);
        });
    } catch (exception) {
      AppLogger.error(exception);
    }
  }
  // req.body has object of type {firstName:"fnam1",lastName:"lnam1",userName:"username1"}
  /**
   * Crear un usuario
   * @param req petición
   * @param res respuesta
   */
  public async post(_req: express.Request, _res: express.Response) {
    try {
      const user = _req.body;
      await userService
        .addOne(user)
        .then((data: IUser) => {
          _res.json(data);
        })
        .catch((error: Error) => {
          AppLogger.error(error);
        });
    } catch (exception) {
      AppLogger.error(exception);
    }
  }
  /**
   * Modificar un usuario
   * @param req petición
   * @param res respuesta
   */
  public async put(_req: express.Request, _res: express.Response) {
    try {
      const conditions = {
        _id: _req.params.id,
      };
      const user = _req.body;
      await userService
        .updateOne(conditions, user)
        .then((data: IUser) => {
          _res.json(data);
        })
        .catch((error: Error) => {
          AppLogger.error(error);
        });
    } catch (exception) {
      AppLogger.error(exception);
    }
  }
  /**
   * Eliminar un usuario por id
   * @param req petición
   * @param res respuesta
   */
  public async delete(_req: express.Request, _res: express.Response) {
    try {
      const id = _req.params.id;
      await userService
        .deleteById(id)
        .then((data: IUser) => {
          _res.json(data);
        })
        .catch((error: Error) => {
          AppLogger.error(error);
        });
    } catch (exception) {
      AppLogger.error(exception);
    }
  }
}
