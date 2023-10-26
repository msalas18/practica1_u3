import { Injectable } from '@angular/core';
import { product } from '../app/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  
  public favsArray:any;

  constructor() { }
  
  setFav(favs: { [productId: string]: { product:product } })  {
    this.favsArray = Object.values(favs);
  }
  getFav(){
    return this.favsArray;
  }
}
