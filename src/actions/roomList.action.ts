import {RoomListModel} from '../Models/roomList.model';

export class GetRoomList {
  static readonly type = '[RoomList] Get';
}

export class AddRoomList {
  static readonly type = '[RoomList] Add';
  constructor(public payload: RoomListModel) {
  }
}
