import { Component } from '@angular/core';
import { CarritoService } from '../carrito.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  public cartArray: any;
  public totalCart: any;

  constructor(private carritoService: CarritoService) { }

  ionViewWillEnter() {
    this.cartArray = this.carritoService.getCart();
    this.totalCart = this.carritoService.getTotalCart();
  }

}