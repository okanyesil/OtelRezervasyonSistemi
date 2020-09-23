import { State, Action, StateContext, Selector } from '@ngxs/store';
import {HotelInfo} from '../Models/hotelInfo';

import {GetHotelInfo} from '../actions/hotel.action';
import {tap} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {HotelService} from '../app/services/hotel.service';


export class HotelStateModel {
  hotels: HotelInfo;
}

@State<HotelStateModel>({
  name: 'HotelInfo',
  defaults: {
    hotels: { HotelName: '', LogoURL: '',
      Phone: '', SupportTime: '', MainColor: '', SeconderyColor: '', province: '', district: '', hotelPhoto: ''
    }
  }
})
@Injectable()
export class HotelState {
  constructor(private hotelService: HotelService) {
  }

  @Selector()
  static getHotel(state: HotelStateModel) {
    return state.hotels;
  }
  @Action(GetHotelInfo)
  getHotelInfo({getState, setState, patchState}: StateContext<HotelStateModel>) {
    return this.hotelService.getHotelInfo().pipe(tap(value => {
      const state = getState();
      setState({
        ...state,
        hotels: value,
      });
    }));
  }

}
