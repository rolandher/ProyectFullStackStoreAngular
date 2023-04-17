import { UseCase } from 'src/base/use-case';
import { Observable } from 'rxjs';
import { ProductRepository } from 'src/domain/repositories/product.repository';
import { NewProductModel } from 'src/domain/interfaces/productInterface/NewProduct.model';

export class CreateProductProfileUseCase implements UseCase<NewProductModel, NewProductModel> {

    constructor(private productRepository: ProductRepository) { }

    execute(product : NewProductModel): Observable<NewProductModel> {
        return this.productRepository.createProductAsync(product);
  }

}
