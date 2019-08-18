import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductFormPresenterComponent } from './product-form-presenter.component';

describe('ProductFormPresenterComponent', () => {
  let component: ProductFormPresenterComponent;
  let fixture: ComponentFixture<ProductFormPresenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductFormPresenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductFormPresenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
