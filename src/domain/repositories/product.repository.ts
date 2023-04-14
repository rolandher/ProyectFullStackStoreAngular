import { Observable } from 'rxjs';
import { ProductModel } from '../interfaces/productInterface/product.model';

export abstract class ProductRepository {
    abstract getProductAsync(): Observable<ProductModel[]>;

}
