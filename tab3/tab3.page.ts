import { Component } from '@angular/core';
import { FavoritesService } from "../favorites.service";

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  public favsArray : any;
  constructor(private favoritesService:FavoritesService) {}
  ionViewWillEnter(){
    this.favsArray = this.favoritesService.getFav();
  }
}
