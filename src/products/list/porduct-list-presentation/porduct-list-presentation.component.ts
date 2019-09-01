import { Product } from 'src/products/product.model';

import {
  ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output
} from '@angular/core';

import {
  ProductListPresenterService
} from '../product-list-presenter/product-list-presenter.service';

@Component({
  selector: 'app-porduct-list-presentation',
  templateUrl: './porduct-list-presentation.component.html',
  styleUrls: ['./porduct-list-presentation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  viewProviders: [
    // ProductListPresenterService
  ]
})
export class PorductListPresentationComponent implements OnInit {

  /** Product list */
  @Input() products: Product[];

  /** Product selection event */
  @Output() productSelect: EventEmitter<Product> = new EventEmitter<Product>();

  /** Add new product event */
  @Output() addNewProduct: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(
    // private listPresenter: ProductListPresenterService
  ) { }

  ngOnInit() { }

  /**
   * Raise event on product selection for edit
   * @param product selected product
   */
  public raiseSelectProduct(product): void {
    this.productSelect.emit(product);
  }

  /**
   * Raise event for adding new product
   */
  public raiseAddNewProduct() {
    this.addNewProduct.emit(true);
  }

}
