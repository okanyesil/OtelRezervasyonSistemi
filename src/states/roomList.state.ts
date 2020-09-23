import { State, Action, StateContext, Selector } from '@ngxs/store';
import {RoomListModel} from '../Models/roomList.model';
import {Injectable} from '@angular/core';
import {AddRoomList, GetRoomList} from '../actions/roomList.action';
import {tap} from 'rxjs/operators';
import {RoomlistService} from '../app/services/roomlist.service';

export class RoomListStateModel {
  roomList: RoomListModel[];
}
@State<RoomListStateModel>({
  name: 'RoomInfo',
  defaults: {
    roomList: []
  }
})
@Injectable()
export class RoomListState {
  @Selector()
  static getRooms(state: RoomListStateModel) {
    return state.roomList;
  }
  constructor(private roomlistService: RoomlistService) {
  }
  @Action(GetRoomList)
  getRoomList({getState, setState}: StateContext<RoomListStateModel>) {
    return this.roomlistService.getRoomList().pipe(tap(value => {
      const state = getState();
      setState({
        ...state,
        roomList: [...value]
      });
    }));
  }
  @Action(AddRoomList)
  addRoomList({getState, patchState}: StateContext<RoomListStateModel>, {payload}: AddRoomList) {
    return this.roomlistService.getRoomList().pipe(tap(value => {
      const state = getState();
      patchState({
        roomList: [...state.roomList, payload]
      });
    }));
  }

}
