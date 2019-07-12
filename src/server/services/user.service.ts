import * as mongoose from 'mongoose';
import { User, IUser } from '../models';
import CrudService from './crud.service';

/**
 * Clase que realiza las operaciones sobre los documentos de tipo IUser
 */
class UserService extends CrudService<IUser> {
  private static instance: UserService;

  private constructor() {
    super(User);
  }

  /**
   * Devuelve una instancia singleton de la clase
   */
  public static getInstance(): UserService {
    if (!UserService.instance) {
      UserService.instance = new UserService();
    }
    return UserService.instance;
  }

  /**
   *
   * @param userName el nombre del usuario en el documento de tipo <T> a buscar
   */
  public async findByUserName(userName: string): Promise<IUser> {
    return User.findOne({ nombre: new mongoose.Types.ObjectId(userName) })
      .then((data: IUser) => {
        return data;
      })
      .catch((error: Error) => {
        throw error;
      });
  }
}

export default UserService.getInstance();
