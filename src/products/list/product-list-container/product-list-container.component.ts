import { Component, OnInit } from '@angular/core';
import { ProductHttpService } from 'src/products/product-http/product-http.service';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list-container',
  templateUrl: './product-list-container.component.html',
  styleUrls: ['./product-list-container.component.scss']
})
export class ProductListContainerComponent implements OnInit {

  products$: Subject<any[]>;
  constructor(
    private productService: ProductHttpService,
    private router: Router
  ) {
    this.products$ = this.productService.products;
  }

  ngOnInit() {
  }

  onProductSelect(selectedProduct) {
    console.log('On selected product', selectedProduct);

    this.router.navigate(['/products', selectedProduct.id]);
  }

}
