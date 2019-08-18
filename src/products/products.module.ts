import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { PorductListPresentationComponent } from './list/porduct-list-presentation/porduct-list-presentation.component';
import { ProductListContainerComponent } from './list/product-list-container/product-list-container.component';
import { ProductFormContainerComponent } from './form/product-form-container/product-form-container.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductFormPresenterComponent } from './form/product-form-presenter/product-form-presenter.component';


@NgModule({
  declarations: [
    ProductListContainerComponent,
    PorductListPresentationComponent,
    ProductFormContainerComponent,
    ProductFormPresenterComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    ReactiveFormsModule
  ]
})
export class ProductsModule { }
