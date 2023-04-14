import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ProductRepository } from 'src/domain/repositories/product.repository';
import { GetProductProfileUseCase } from 'src/domain/usecases/productCases/get-product-profile.usecase';
import { ProductImplementationRepository } from './product-implementation.repository';


const getProductProfileUseCaseFactory =
(producRepo: ProductRepository) => new GetProductProfileUseCase(producRepo);
export const getProductProfileUseCaseProvider = {
    provide: GetProductProfileUseCase,
    useFactory: getProductProfileUseCaseFactory,
    deps: [ProductRepository],
};

@NgModule({
    providers: [
      getProductProfileUseCaseProvider,
        { provide: ProductRepository, useClass: ProductImplementationRepository },
    ],
    imports: [
        CommonModule,
        HttpClientModule,
    ],
})
export class ProductModule { }
