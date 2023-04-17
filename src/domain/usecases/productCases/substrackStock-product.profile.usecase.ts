import { UseCase } from 'src/base/use-case';
import { Observable } from 'rxjs';
import { ProductRepository } from 'src/domain/repositories/product.repository';
import { ProductModel } from 'src/domain/interfaces/productInterface/product.model';
import { StockProduct } from 'src/domain/interfaces/productInterface/stockProduct.model';

export class SubtractStockProductProfileUseCase implements UseCase<StockProduct, ProductModel> {

  constructor(private productRepository: ProductRepository) { }

  execute(stock: StockProduct): Observable<ProductModel> {
      return this.productRepository.subtractStockProductAsync(stock);
  }
}
