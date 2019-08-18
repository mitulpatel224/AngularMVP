import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProductListPresenterService } from '../product-list-presenter/product-list-presenter.service';

@Component({
  selector: 'app-porduct-list-presentation',
  templateUrl: './porduct-list-presentation.component.html',
  styleUrls: ['./porduct-list-presentation.component.scss']
})
export class PorductListPresentationComponent implements OnInit {

  @Input() products: any[];
  @Output() productSelect: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    private listPresenter: ProductListPresenterService
  ) { }

  ngOnInit() {
  }

  selectProduct(product): void {
    console.log('selected product', product);
    this.productSelect.emit(product);
  }

}
