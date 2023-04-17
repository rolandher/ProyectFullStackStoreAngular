import { Observable } from 'rxjs';
import { ProductModel } from '../interfaces/productInterface/product.model';
import { NewProductModel } from '../interfaces/productInterface/NewProduct.model';
import { UpdateState } from '../interfaces/productInterface/updateState';

export abstract class ProductRepository {
    abstract getProductAsync(): Observable<ProductModel[]>;
    abstract createProductAsync(product: NewProductModel): Observable<NewProductModel>;
    abstract getProductByIdAsync(id: number): Observable<ProductModel>;
    abstract updateStateAsync(updateState: UpdateState): Observable<ProductModel>;
    abstract agregateStockProductAsync(id: number, stock: number): Observable<ProductModel>;
    abstract subtractStockProductAsync(id: number, stock: number): Observable<ProductModel>;
}
