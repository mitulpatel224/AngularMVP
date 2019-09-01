import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import {
  ProductFormContainerComponent
} from './form/product-form-container/product-form-container.component';
import {
  ProductFormPresentionComponent
} from './form/product-form-presention/product-form-presention.component';
import {
  PorductListPresentationComponent
} from './list/porduct-list-presentation/porduct-list-presentation.component';
import {
  ProductListContainerComponent
} from './list/product-list-container/product-list-container.component';
import { ProductsRoutingModule } from './products-routing.module';

@NgModule({
  declarations: [
    ProductListContainerComponent,
    PorductListPresentationComponent,
    ProductFormContainerComponent,
    ProductFormPresentionComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    ReactiveFormsModule
  ]
})
export class ProductsModule { }
