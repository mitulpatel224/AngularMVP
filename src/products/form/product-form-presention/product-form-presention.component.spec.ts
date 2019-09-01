import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductFormPresentionComponent } from './product-form-presention.component';

describe('ProductFormPresentionComponent', () => {
  let component: ProductFormPresentionComponent;
  let fixture: ComponentFixture<ProductFormPresentionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductFormPresentionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductFormPresentionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
