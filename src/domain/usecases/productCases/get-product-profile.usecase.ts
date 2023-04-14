import { UseCase } from 'src/base/use-case';
import { Observable } from 'rxjs';
import { ProductModel } from 'src/domain/interfaces/productInterface/product.model';
import { ProductRepository } from 'src/domain/repositories/product.repository';

export class GetProductProfileUseCase implements UseCase<void, ProductModel[]> {

    constructor(private productRepository: ProductRepository) { }

    execute(): Observable<ProductModel[]> {
        return this.productRepository.getProductAsync();
  }

}
