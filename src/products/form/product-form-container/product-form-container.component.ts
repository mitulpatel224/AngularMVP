import { ProductHttpService } from 'src/products/product-http/product-http.service';
import { Product } from 'src/products/product.model';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-form-container',
  templateUrl: './product-form-container.component.html',
  styleUrls: ['./product-form-container.component.scss']
})
export class ProductFormContainerComponent implements OnInit {

  /** Product detail */
  private product: Product;

  /** Mode of form add/edit */
  private formMode: 'add' | 'edit' = 'add';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: ProductHttpService
  ) {

    // Watch over route params for product id
    this.route.paramMap.subscribe(params => {
      if (params.has('id')) {
        const productID = +params.get('id');
        this.formMode = 'edit';
        this.getProductDetail(productID);
      } else {
        this.product = service.getNewProduct();
      }
    });
  }

  ngOnInit() { }

  /**
   * On cancel changes
   * @param flag boolean
   */
  public onCancelChanges(flag) {
    this.router.navigate(['/products']);
  }

  /**
   * Update change/ add new product on form updated
   * @param product product detail
   */
  public formUpdated(product) {
    if (this.formMode === 'edit') {
      this.service.updateProduct(product);
    } else {
      this.service.addNewProduct(product);
    }
    this.router.navigate(['/products']);
  }

  /**
   * Get product detail from http service
   * @param productID product id
   */
  private getProductDetail(productID: Product['id']) {
    const product = this.service.getProductById(productID);
    this.product = { ...product };
  }

}
