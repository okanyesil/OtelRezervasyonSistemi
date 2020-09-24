import { Component } from '@angular/core';
import {Select, Store} from '@ngxs/store';
import {ShoppingCartState} from '../states/shoppingCart.state';
import {Observable} from 'rxjs';
import {ShoppingCartModel} from '../Models/shoppingCart.model';
import {map, mergeMap} from 'rxjs/operators';
import {EkstraHizmetState} from '../states/ekstraHizmet.state';
import {EkstraHizmetModel} from '../Models/ekstraHizmet.model';
import {KonaklamaBilgileriState} from '../states/konaklamaBilgileri.state';
import {KonaklamaTarihModel} from '../Models/konaklamaTarih.model';
import {DeleteShoppingItem} from '../actions/shoppingCart.action';
import {DeleteEkstraHizmet} from '../actions/ekstraHizmet.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'siparis';
  @Select(ShoppingCartState.getShoppingItems)
  shoppingCart$: Observable<ShoppingCartModel[]>;
  @Select(EkstraHizmetState.getEkstraHizmet)
  ekstraHizmet$: Observable<EkstraHizmetModel[]>;
  @Select(KonaklamaBilgileriState.getKonaklama)
  konaklamaBilgileri$: Observable<KonaklamaTarihModel>;
  tutar: number;
  btnClicked = false;
  selectedItem = 1;
  constructor(private store: Store) {
  }
  get sepetTutari() {
    this.tutar = 0;
    this.shoppingCart$.pipe(mergeMap(value => value), map(value => value["fiyat"])).subscribe(value => {
      this.tutar += parseFloat(String(value));
    });
    this.ekstraHizmet$.pipe(mergeMap(value => value), map(value => value["fiyat"])).subscribe(value => {
      this.tutar += parseFloat(String(value));
    });
    return this.tutar;
  }
  get girisTarihi$() {
    return this.konaklamaBilgileri$.pipe(map(value => value["girisTarihi"]));
  }
  get cikisTarihi$() {
    return this.konaklamaBilgileri$.pipe(map(value => value["cikisTarihi"]));
  }
  get konaklamaSuresi$() {
    return this.konaklamaBilgileri$.pipe(map(value => value["konaklamaSuresi"]));
  }
  get yetiskinSayisi$() {
    return this.konaklamaBilgileri$.pipe(map(value => value["yetiskinSayisi"]));
  }
  get cocukSayisi$() {
    return this.konaklamaBilgileri$.pipe(map(value => value["cocukSayisi"]));
  }
  changeValue() {
    if (this.btnClicked === true) {
      this.btnClicked = false;
    } else {
      this.btnClicked = true;
    }
  }
  clicked(sayi: number) {
    if (sayi === 1) {
      this.selectedItem = 1;
    }
    else if (sayi === 2) {
      this.selectedItem = 2;
    }
    else if (sayi === 4) {
      this.selectedItem = 4;
    }
    else {
      this.selectedItem = 3;
    }
  }
  deleteItem(item: any) {
    this.store.dispatch(new DeleteShoppingItem(item));
  }
  deleteHizmet(item: any) {
    this.store.dispatch(new DeleteEkstraHizmet(item));
  }
}
