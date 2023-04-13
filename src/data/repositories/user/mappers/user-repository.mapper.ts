import { Mapper } from 'src/base/mapper';
import { UserModel } from 'src/domain/interfaces/user.model';
import { UserEntity } from '../entities/user-entity';


export class UserImplementationRepositoryMapper extends Mapper<UserEntity, UserModel> {
    mapFrom(param: UserEntity): UserModel {
        return {
          user_id: param.user_id,
          firebase_id: param.firebase_id,
          names: param.names,
          surNames: param.surNames,
          email: param.email,
          phone: param.phone,
          gender: param.gender,
          state: param.state
        };
    }
    mapTo(param: UserModel): UserEntity {
        return {
          user_id: param.user_id,
          firebase_id: param.firebase_id,
          names: param.names,
          surNames: param.surNames,
          email: param.email,
          phone: param.phone,
          gender: param.gender,
          state: param.state
        }
    }
}
