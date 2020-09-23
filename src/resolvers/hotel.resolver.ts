import {Resolve} from '@angular/router';
import {Store} from '@ngxs/store';
import {GetHotelInfo} from '../actions/hotel.action';
import {Injectable} from '@angular/core';
import {HotelInfo} from '../Models/hotelInfo';

@Injectable()
export class HotelResolver implements Resolve<HotelInfo> {
  constructor(private store: Store) {
  }
  resolve() {
    return this.store.dispatch(new GetHotelInfo());
  }

}
