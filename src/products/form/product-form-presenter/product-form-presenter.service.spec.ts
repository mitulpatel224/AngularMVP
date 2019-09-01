import { TestBed } from '@angular/core/testing';

import { ProductFormPresenterService } from './product-form-presenter.service';

describe('ProductFormPresenterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductFormPresenterService = TestBed.get(ProductFormPresenterService);
    expect(service).toBeTruthy();
  });
});
