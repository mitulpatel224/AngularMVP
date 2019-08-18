import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-product-form-presenter',
  templateUrl: './product-form-presenter.component.html',
  styleUrls: ['./product-form-presenter.component.scss']
})
export class ProductFormPresenterComponent implements OnInit {

  @Input() productForm: Subject<FormGroup>;
  @Output() cancelChanges: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit() {
  }

  cancelForm() {
    this.cancelChanges.emit(true);
  }

}
