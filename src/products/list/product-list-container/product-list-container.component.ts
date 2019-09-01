import { Observable } from 'rxjs';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ProductHttpService } from '../../product-http/product-http.service';

@Component({
  selector: 'app-product-list-container',
  templateUrl: './product-list-container.component.html',
  styleUrls: ['./product-list-container.component.scss']
})
export class ProductListContainerComponent implements OnInit {

  /** Products observable from http-service */
  public products$: Observable<any[]>;

  constructor(
    private router: Router,
    private productService: ProductHttpService,
  ) {
    this.products$ = this.productService.products;
  }

  ngOnInit() { }

  /**
   * Navigate to edit mode on prduct select
   * @param selectedProduct selected product data
   */
  public onProductSelect(selectedProduct) {
    this.router.navigate(['/products/edit', selectedProduct.id]);
  }

  /**
   * Navigate to add mode on add new event
   * @param flag boolean flag
   */
  public onAddNewProduct(flag) {
    this.router.navigate(['/products/add']);
  }

}
