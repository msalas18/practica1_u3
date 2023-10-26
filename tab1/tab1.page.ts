import { Component } from '@angular/core';
import { product } from '../models/product.model';
import { CarritoService } from '../carrito.service';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page {

  public products: product[]=[];
  public productsFounds: product[]=[];
  public filter = [
    "Abarrotes",
    "Limpieza",
    "Frutas y Verduras",
    "Farmacia"
  ];
  public cart: { [productId: string]: { product: product, quantity: number, subtotal: number  } } = {};
  public totalCart: number = 0
  public cartArray: { product: product, quantity: number, subtotal: number }[] = [];


  constructor(private carritoService: CarritoService) {
    this.products.push({
      name: 'Harina de trigo',
      photo: 'https://picsum.photos/500/300?random=',
      description: 'Harina del Valle 1kg',
      price: 23,
      type: 'Abarrotes'
    });

    this.products.push({
      name: 'Poett Bebé',
      photo: 'https://picsum.photos/500/300?random=',
      description: 'Poett aroma bebé 900ml',
      price: 20,
      type: 'Limpieza'
    });

    this.products.push({
      name: 'Mango bola',
      photo: 'https://picsum.photos/500/300?random=',
      description: 'Mango',
      price: 15,
      type: 'Frutas y Verduras'
    });

    this.products.push({
      name: 'Broncolín',
      photo: 'https://picsum.photos/500/300?random=',
      description: 'Para el alivio de los síntomas de la tos',
      price: 60,
      type: 'Farmacia'
    });

    this.products.push({
      name: 'Ensueño primaveral',
      photo: 'https://picsum.photos/500/300?random=',
      description: 'Ensueño primaveral 950ml',
      price: 89,
      type: 'Limpieza'
    });

    this.products.push({
      name: 'Facial Quality',
      photo: 'https://picsum.photos/500/300?random=',
      description: 'Facial Quality 6 rollos de 500 hojas',
      price: 60,
      type: 'Abarrotes'
    });

    this.productsFounds = this.products;
  }

  public filterProducts():void {
    console.log(this.filter);
    this.productsFounds = this.products.filter(
      item => {
        return this.filter.includes(item.type);
      });
  }
  
  public addToCart(product: product): void {
    const productId = product.name;
  
    if (this.cart[productId]) {
      this.cart[productId].quantity += 1;
      this.cart[productId].subtotal += this.cart[productId].product.price;
    } else {
      this.cart[productId] = { product, quantity: 1, subtotal: product.price};
    }
    this.carritoService.setCart(this.cart);
    this.calculateTotal();
    this.updateCartArray();
  }

  private calculateTotal(): void {
    this.totalCart = 0;
    for (const productId in this.cart) {
      const item = this.cart[productId];
      this.totalCart += item.product.price * item.quantity;
    }
    this.carritoService.setTotalCart(this.totalCart);
  }

  private updateCartArray() {
    this.cartArray = Object.values(this.cart);
  }

}