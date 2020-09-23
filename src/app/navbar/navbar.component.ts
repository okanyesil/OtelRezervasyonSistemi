import { Component, OnInit } from '@angular/core';
import {map, shareReplay, take, tap} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {HotelInfo} from '../../Models/hotelInfo';
import {Select, Store} from '@ngxs/store';
import {HotelState} from '../../states/hotel.state';
import {GetHotelInfo} from '../../actions/hotel.action';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Select(HotelState.getHotel)
  hotelDetail$: Observable<HotelInfo>;
  constructor(private store: Store) { }
 // shareReplay(1) sonsuz döngüyü engeller
  ngOnInit(): void {
    this.store.dispatch(new GetHotelInfo());
  }
  hotelName$() {
     this.hotelDetail$.pipe(tap(value => console.log(value)));
  }
  get hotelLogoUrl$() {
    return this.hotelDetail$.pipe(map(value => value.LogoURL));
  }
  get hotelPhone$() {
    return this.hotelDetail$.pipe(map(value => value.Phone));
  }
  get hotelSupportTime$() {
    return this.hotelDetail$.pipe(map(value => value.SupportTime));
  }


}
