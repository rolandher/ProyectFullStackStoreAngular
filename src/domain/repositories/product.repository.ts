import { Observable } from 'rxjs';
import { ProductModel } from '../interfaces/productInterface/product.model';
import { NewProductModel } from '../interfaces/productInterface/NewProduct.model';
import { UpdateState } from '../interfaces/productInterface/updateState';
import { StockProduct } from '../interfaces/productInterface/stockProduct.model';

export abstract class ProductRepository {
    abstract getProductAsync(): Observable<ProductModel[]>;
    abstract createProductAsync(product: NewProductModel): Observable<NewProductModel>;
    abstract getProductByIdAsync(id: number): Observable<ProductModel>;
    abstract updateStateAsync(updateState: UpdateState): Observable<ProductModel>;
    abstract agregateStockProductAsync(stock: StockProduct): Observable<ProductModel>;
    abstract subtractStockProductAsync(stock: StockProduct): Observable<ProductModel>;
}
