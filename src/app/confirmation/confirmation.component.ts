import { Component, OnInit } from '@angular/core';
import {Select, Store} from '@ngxs/store';
import {HotelState} from '../../states/hotel.state';
import {Observable} from 'rxjs';
import {HotelInfo} from '../../Models/hotelInfo';
import {KonaklamaBilgileriState} from '../../states/konaklamaBilgileri.state';
import {KonaklamaTarihModel} from '../../Models/konaklamaTarih.model';
import {GetHotelInfo} from '../../actions/hotel.action';
import {GetKonaklamaBilgileri} from '../../actions/konaklamaSuresi.model';
import {map, mergeMap, tap} from 'rxjs/operators';
import {ShoppingCartModel} from '../../Models/shoppingCart.model';
import {EkstraHizmetState} from '../../states/ekstraHizmet.state';
import {EkstraHizmetModel} from '../../Models/ekstraHizmet.model';
import {ShoppingCartState} from '../../states/shoppingCart.state';
import {CreditCardControlService} from '../services/credit-card-control.service';

@Component({
  selector: 'app-onay',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {
  @Select(HotelState.getHotel)
  hotelDetail$: Observable<HotelInfo>;
  @Select(KonaklamaBilgileriState.getKonaklama)
  konaklamaBilgileri$: Observable<KonaklamaTarihModel>;
  @Select(ShoppingCartState.getShoppingItems)
  shoppingCart$: Observable<ShoppingCartModel[]>;
  @Select(EkstraHizmetState.getEkstraHizmet)
  ekstraHizmet$: Observable<EkstraHizmetModel[]>;
  tutar: number;
  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(new GetHotelInfo());
    this.store.dispatch(new GetKonaklamaBilgileri());
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
  get sepetTutari() {
    this.tutar = 0;
    this.shoppingCart$.pipe(mergeMap(value => value), map(value => value["fiyat"])).subscribe(value => {
      this.tutar += value;
    });
    this.ekstraHizmet$.pipe(mergeMap(value => value), map(value => value["fiyat"])).subscribe(value => {
      this.tutar += value;
    });
    return this.tutar;
  }
  get hotelName$() {
    return this.hotelDetail$.pipe(map(value => value.HotelName));
  }
  get hotelLogoUrl$() {
    return this.hotelDetail$.pipe(map(value => value.LogoURL));
  }
  get hotelPhone$() {
    return this.hotelDetail$.pipe(map(value => value.Phone));
  }
  get provinceName$() {
    return this.hotelDetail$.pipe(map(value => value.province));
  }
  get districtName$() {
    return this.hotelDetail$.pipe(map(value => value.district));
  }
  get hotelPhoto$() {
    return this.hotelDetail$.pipe(map(value => value.hotelPhoto));
  }

}
