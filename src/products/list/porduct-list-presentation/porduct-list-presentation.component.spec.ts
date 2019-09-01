import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PorductListPresentationComponent } from './porduct-list-presentation.component';

describe('PorductListPresentationComponent', () => {
  let component: PorductListPresentationComponent;
  let fixture: ComponentFixture<PorductListPresentationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PorductListPresentationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PorductListPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
