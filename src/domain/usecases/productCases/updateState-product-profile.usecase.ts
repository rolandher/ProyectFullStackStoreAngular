import { UseCase } from 'src/base/use-case';
import { Observable } from 'rxjs';
import { ProductRepository } from 'src/domain/repositories/product.repository';
import { UpdateState } from 'src/domain/interfaces/productInterface/updateState';
import { ProductModel } from 'src/domain/interfaces/productInterface/product.model';

export class UpdateStateProfileUseCase implements UseCase<UpdateState, ProductModel> {

  constructor(private productRepository: ProductRepository) { }

  execute(updateState: UpdateState): Observable<ProductModel> {
      return this.productRepository.updateStateAsync(updateState);
  }
}
