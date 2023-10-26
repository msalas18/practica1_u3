import { Injectable } from '@angular/core';
import { product } from '../app/models/product.model';


@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  public cartArray: any;
  public totalCart: number = 0;

  constructor() { }

  setCart(cart: { [productId: string]: { product: product, quantity: number, subtotal: number  } }) {
    this.cartArray = Object.values(cart);
  }

  setTotalCart(total: number) {
    this.totalCart = total;
  }

  getCart() {
    return this.cartArray;
  }

  getTotalCart() {
    return this.totalCart;
  }
}
