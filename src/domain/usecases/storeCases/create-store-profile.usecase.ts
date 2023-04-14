import { UseCase } from 'src/base/use-case';
import { StoreRepository } from 'src/domain/repositories/store.repository';
import { Observable } from 'rxjs';
import { NewStoreModel } from 'src/domain/interfaces/storeInterface/newStore.model';


export class CreateStoreProfileUseCase implements UseCase<NewStoreModel, NewStoreModel> {

    constructor(private storeRepository: StoreRepository) { }

    execute(store : NewStoreModel): Observable<NewStoreModel> {
        return this.storeRepository.createStoreAsync(store);
  }


}
