import { Injectable } from '@angular/core';
import SampleJson from '../../assets/products.json';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductHttpService {

  private products$: BehaviorSubject<any>;

  constructor() {
    this.products$ = new BehaviorSubject<any>(SampleJson);
  }

  public get products(): Observable<any> {
    return this.products$.asObservable();
  }
  public setProducts(list) {
    this.products$.next(list);
  }

  updateProduct(product) {
    let list = this.products$.getValue() as any[];
    const x = list.findIndex(p => p.id === product.id);
    if (x) {
      list = list.splice(x, 1, product);
      this.setProducts(list);
    }
  }
}
