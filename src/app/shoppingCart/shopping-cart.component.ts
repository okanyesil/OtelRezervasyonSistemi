import { Component, OnInit } from '@angular/core';
import {Select, Store} from '@ngxs/store';
import {ShoppingCartState} from '../../states/shoppingCart.state';
import {merge, Observable} from 'rxjs';
import {ShoppingCartModel} from '../../Models/shoppingCart.model';
import {DeleteShoppingItem, GetShoppingCart} from '../../actions/shoppingCart.action';
import { map, mergeMap} from 'rxjs/operators';
import {EkstraHizmetState} from '../../states/ekstraHizmet.state';
import {EkstraHizmetModel} from '../../Models/ekstraHizmet.model';
import {KonaklamaBilgileriState} from '../../states/konaklamaBilgileri.state';
import {KonaklamaTarihModel} from '../../Models/konaklamaTarih.model';
import { GetKonaklamaBilgileri} from '../../actions/konaklamaSuresi.model';
import {DeleteEkstraHizmet} from '../../actions/ekstraHizmet.action';


@Component({
  selector: 'app-sepet',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  @Select(ShoppingCartState.getShoppingItems)
  shoppingCart$: Observable<ShoppingCartModel[]>;
  @Select(EkstraHizmetState.getEkstraHizmet)
  ekstraHizmet$: Observable<EkstraHizmetModel[]>;
  @Select(KonaklamaBilgileriState.getKonaklama)
  konaklamaBilgileri$: Observable<KonaklamaTarihModel>;

  tutar: number;

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(new GetShoppingCart());
    this.store.dispatch(new GetKonaklamaBilgileri());
    this.tutar = 0;
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

  // methodun başında tutarın sıfırlanmasının nedeni hesaplama yeniden yapıldığında tüm sepet baştan hesaplanıyor.
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
  deleteItem(item: any) {
    this.store.dispatch(new DeleteShoppingItem(item));
  }
  deleteHizmet(item: any) {
    this.store.dispatch(new DeleteEkstraHizmet(item));
  }


}
