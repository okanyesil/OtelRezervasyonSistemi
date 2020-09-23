import {Injectable} from '@angular/core';
import {Resolve} from '@angular/router';
import {RoomListState} from '../states/roomList.state';
import {Store} from '@ngxs/store';
import {GetRoomList} from '../actions/roomList.action';

@Injectable()
export class RoomListResolver implements Resolve<RoomListState>{
  constructor(private store: Store) {
  }
  resolve() {
    return this.store.dispatch(new GetRoomList());
  }
}
