import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListContainerComponent } from './list/product-list-container/product-list-container.component';
import { ProductFormContainerComponent } from './form/product-form-container/product-form-container.component';


const routes: Routes = [
  {
    path: '',
    component: ProductListContainerComponent
  },
  {
    path: ':id',
    component: ProductFormContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
