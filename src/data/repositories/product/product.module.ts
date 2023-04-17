import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ProductRepository } from 'src/domain/repositories/product.repository';
import { GetProductProfileUseCase } from 'src/domain/usecases/productCases/get-product-profile.usecase';
import { ProductImplementationRepository } from './product-implementation.repository';
import { CreateProductProfileUseCase } from 'src/domain/usecases/productCases/create-product-profile.usecase';
import { GetProductByIdProfileUseCase } from 'src/domain/usecases/productCases/get-productoById-profile.usecase';
import { UpdateStateProfileUseCase } from 'src/domain/usecases/productCases/updateState-product-profile.usecase';
import { AddStockProductProfileUseCase } from 'src/domain/usecases/productCases/addStock-product-profile.usecase';
import { SubtractStockProductProfileUseCase } from 'src/domain/usecases/productCases/substrackStock-product.profile.usecase';


const getProductProfileUseCaseFactory =
(producRepo: ProductRepository) => new GetProductProfileUseCase(producRepo);
export const getProductProfileUseCaseProvider = {
    provide: GetProductProfileUseCase,
    useFactory: getProductProfileUseCaseFactory,
    deps: [ProductRepository],
};

const createProductProfileUseCaseFactory =
(producRepo: ProductRepository) => new CreateProductProfileUseCase(producRepo);
export const createProductProfileUseCaseProvider = {
    provide: CreateProductProfileUseCase,
    useFactory: createProductProfileUseCaseFactory,
    deps: [ProductRepository],
};

const getProductByIdProfileUseCaseFactory =
(producRepo: ProductRepository) => new GetProductByIdProfileUseCase(producRepo);
export const getProductByIdProfileUseCaseProvider = {
    provide: GetProductByIdProfileUseCase,
    useFactory: getProductByIdProfileUseCaseFactory,
    deps: [ProductRepository],
};

const updateStateProfileUseCaseFactory =
(producRepo: ProductRepository) => new UpdateStateProfileUseCase(producRepo);
export const updateStateProfileUseCaseProvider = {
    provide: UpdateStateProfileUseCase,
    useFactory: updateStateProfileUseCaseFactory,
    deps: [ProductRepository],
};

const addStockProductProfileUseCaseFactory =
(producRepo: ProductRepository) => new AddStockProductProfileUseCase(producRepo);
export const addStockProductProfileUseCaseProvider = {
    provide: AddStockProductProfileUseCase,
    useFactory: addStockProductProfileUseCaseFactory,
    deps: [ProductRepository],
};

const subtractStockProductProfileUseCaseFactory =
(producRepo: ProductRepository) => new SubtractStockProductProfileUseCase(producRepo);
export const subtractStockProductProfileUseCaseProvider = {
    provide: SubtractStockProductProfileUseCase,
    useFactory: subtractStockProductProfileUseCaseFactory,
    deps: [ProductRepository],
};



@NgModule({
    providers: [
      getProductProfileUseCaseProvider,
      getProductByIdProfileUseCaseProvider,
      createProductProfileUseCaseProvider,
      updateStateProfileUseCaseProvider,
      addStockProductProfileUseCaseProvider,
      subtractStockProductProfileUseCaseProvider,
        { provide: ProductRepository, useClass: ProductImplementationRepository },
    ],
    imports: [
        CommonModule,
        HttpClientModule,
    ],
})
export class ProductModule { }
