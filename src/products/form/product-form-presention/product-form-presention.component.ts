import { Product } from 'src/products/product.model';

import {
  ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output
} from '@angular/core';
import { FormGroup } from '@angular/forms';

import {
  ProductFormPresenterService
} from '../product-form-presenter/product-form-presenter.service';

@Component({
  selector: 'app-product-form-presention',
  templateUrl: './product-form-presention.component.html',
  styleUrls: ['./product-form-presention.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  viewProviders: [
    ProductFormPresenterService
  ]
})
export class ProductFormPresentionComponent implements OnInit {

  /** Product form reference */
  private productForm: FormGroup;

  /**Product detail
   * Get product detail and update form
   */
  @Input() set product(product: Product) {
    if (product) {
      this.productForm = this.presenter.formBuild(product);
    }
  }

  /**
   * Cancel changes event
   */
  @Output() cancelChanges: EventEmitter<boolean> = new EventEmitter<boolean>();

  /**
   * Form update event
   */
  @Output() formUpdated: EventEmitter<Product> = new EventEmitter<Product>();

  constructor(
    private presenter: ProductFormPresenterService
  ) {

    /** Listen to form update observable from presenter */
    this.presenter.formUpdated().subscribe((product) => {
      this.formUpdated.emit(product);
    });
  }

  ngOnInit() { }

  /**
   * On cancel form raise cancel form event
   */
  public cancelForm() {
    this.cancelChanges.emit(true);
  }

  /**
   * On form submit convay to presenter
   * Presenter will validate and raise event of form updated
   */
  public formSubmit() {
    this.presenter.onFormSubmit(this.productForm);
  }

}
