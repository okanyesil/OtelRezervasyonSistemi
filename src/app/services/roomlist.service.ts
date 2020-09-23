import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {RoomListModel} from '../../Models/roomList.model';

@Injectable({
  providedIn: 'root'
})
export class RoomlistService {

  constructor(private http: HttpClient) {
  }
  getRoomList(): Observable<RoomListModel[]> {
    return this.http.get<RoomListModel[]>('http://localhost:3001/rooms');
  }
}
