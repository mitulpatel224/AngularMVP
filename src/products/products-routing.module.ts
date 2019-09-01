import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {
  ProductFormContainerComponent
} from './form/product-form-container/product-form-container.component';
import {
  ProductListContainerComponent
} from './list/product-list-container/product-list-container.component';

const routes: Routes = [
  {
    path: '',
    component: ProductListContainerComponent
  },
  {
    path: 'add',
    component: ProductFormContainerComponent
  },
  {
    path: 'edit/:id',
    component: ProductFormContainerComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
