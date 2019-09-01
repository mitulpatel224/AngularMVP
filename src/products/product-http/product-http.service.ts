import { BehaviorSubject, Observable } from 'rxjs';

import { Injectable } from '@angular/core';

import SampleJson from '../../assets/products.json';
import { Product } from '../product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductHttpService {

  /** List of products */
  private products$: BehaviorSubject<Product[]>;

  constructor() {

    // Using sample json
    this.products$ = new BehaviorSubject<Product[]>(SampleJson);
  }

  /**
   * Get products as observable
   */
  public get products(): Observable<any> {
    return this.products$.asObservable();
  }

  /**
   * Set products observable to next available value
   * @param list products
   */
  private setProducts(list) {
    this.products$.next(list);
  }

  /**
   * Get product data by provided id
   * @param id product id
   */
  public getProductById(id): Product {
    const list = this.products$.value;
    return list.find(p => p.id === +id);
  }

  /**
   * Get new product model
   */
  public getNewProduct(): Product {
    return new Product(null, '', '');
  }

  /**
   * Update and reflect product details
   * @param product updated product detail
   */
  public updateProduct(product) {
    const list = this.products$.getValue();
    const x = list.findIndex(p => p.id === product.id);
    if (x >= 0) {
      list[x] = product;
      this.setProducts(list);
    }
  }

  /**
   * Add new produt to list
   * @param product new product detail
   */
  public addNewProduct(product: Product) {
    product.id = this.products$.getValue().length + 1;
    this.setProducts([...this.products$.getValue(), product]);
  }
}
