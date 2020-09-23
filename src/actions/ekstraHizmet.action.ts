import {EkstraHizmetModel} from '../Models/ekstraHizmet.model';

export class GetEkstraHizmet {
  static readonly type = '[EkstraHizmet] Get';
}
export class AddEkstraHizmet {
  static readonly type = '[EkstraHizmet] Add';
  constructor(public payload: EkstraHizmetModel) {
  }
}
export class DeleteEkstraHizmet {
  static readonly type = '[EkstraHizmet] Delete';
  constructor(public payload: EkstraHizmetModel) {
  }
}
