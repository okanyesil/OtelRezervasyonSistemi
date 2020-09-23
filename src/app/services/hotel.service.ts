import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {HotelInfo} from '../../Models/hotelInfo';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  constructor(private http: HttpClient) { }
  getHotelInfo(): Observable<HotelInfo> {
    return this.http.get<HotelInfo>('http://localhost:3000/hotel');
  }

  deleteHotel(id: number) {
    return this.http.delete<HotelInfo>('http://localhost:3000/hotel/${id}');
  }
  addHotel(payload: HotelInfo) {
    return this.http.post<HotelInfo>('http://localhost:3000/hotel', payload);
  }
  updaHotelInfo(payload: HotelInfo, id: number) {
    return this.http.put('http://localhost:3000/hotel/${id}', payload);
  }
}
