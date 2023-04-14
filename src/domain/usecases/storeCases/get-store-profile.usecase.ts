import { UseCase } from 'src/base/use-case';
import { StoreModel } from 'src/domain/interfaces/storeInterface/store.model';
import { StoreRepository } from 'src/domain/repositories/store.repository';
import { Observable } from 'rxjs';

export class GetStoreProfileUseCase implements UseCase<void, StoreModel[]> {

    constructor(private storeRepository: StoreRepository) { }

    execute(): Observable<StoreModel[]> {
        return this.storeRepository.getStoreAsync();
  }

}
