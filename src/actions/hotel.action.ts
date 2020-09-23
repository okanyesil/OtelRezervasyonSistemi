import {HotelInfo} from '../Models/hotelInfo';
export class GetHotelInfo {
  static readonly type = '[Hotel] Get';
}

export class AddHotel {
  static readonly type = '[Hotel] add';
  constructor(public payload: HotelInfo) {
  }
}
// şuanlık ihtiyac yok
/*
export class UpdateHotelInfo {
  static readonly type = '[Hotel] Update';
  constructor(public payload: HotelInfo, public  id: number) {
  }
}
export class DeleteTodoInfo {
  static readonly type = '[Hotel] Delete';
  constructor(public id: number) {
  }
}*/
