import { TestBed } from '@angular/core/testing';

import { ProductListPresenterService } from './product-list-presenter.service';

describe('ProductListPresenterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductListPresenterService = TestBed.get(ProductListPresenterService);
    expect(service).toBeTruthy();
  });
});
