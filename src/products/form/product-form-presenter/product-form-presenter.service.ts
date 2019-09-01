import { Observable, Subject } from 'rxjs';
import { Product } from 'src/products/product.model';

import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';

@Injectable()
export class ProductFormPresenterService {

  /**
   * Update product observable
   */
  private updateProduct$: Subject<Product>;

  constructor(
    private fb: FormBuilder
  ) {
    this.updateProduct$ = new Subject<Product>();
  }

  /**
   * Generate form group for the given data of product
   * @param product product detail
   */
  public formBuild(product: Product) {
    return this.fb.group({
      id: [product.id || ''],
      name: [product.name || '', [Validators.required]],
      description: [product.description || '', [Validators.required]]
    });
  }

  /**
   * Validate, log error and raise form update event on form submitted
   * @param form product form
   */
  public onFormSubmit(form: FormGroup) {
    if (this.validateForm(form)) {
      this.updateProduct$.next(form.value);
      this.formUpdated();
    } else {
      this.getFormValidationErrors(form);
    }
  }

  /**
   * Provide observable for raising form update event
   */
  public formUpdated(): Observable<Product> {
    return this.updateProduct$.asObservable();
  }

  /**
   * Check validation for the form
   * @param form product form
   */
  public validateForm(form: FormGroup) {
    return form.valid;
  }

  /**
   * Get form validation errors and log over the console
   * @param form product form
   */
  private getFormValidationErrors(form: FormGroup) {
    Object.keys(form.controls).forEach(key => {

      const controlErrors: ValidationErrors = form.get(key).errors;
      if (controlErrors != null) {
        Object.keys(controlErrors).forEach(keyError => {
          console.error(key + ': {keyError: ' + keyError + ',  errorValue: ', controlErrors[keyError] + '}');
        });
      }
    });
  }
}
