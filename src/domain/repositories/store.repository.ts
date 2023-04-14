import { Observable } from 'rxjs';
import { StoreModel } from '../interfaces/storeInterface/store.model';
import { NewStoreModel } from '../interfaces/storeInterface/newStore.model';

export abstract class StoreRepository {
    abstract getStoreAsync(): Observable<StoreModel[]>;
    // abstract getStoreByIdAsync(id: number): Observable<StoreModel>;
    abstract createStoreAsync(store: NewStoreModel): Observable<NewStoreModel>;
}
