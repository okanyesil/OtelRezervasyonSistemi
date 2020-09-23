import {KonaklamaTarihModel} from '../Models/konaklamaTarih.model';

export class GetKonaklamaBilgileri {
  static readonly type = '[KonaklamaBilgileri] Get';
}

export class AddKonaklamaBilgileri {
  static readonly type = '[KonaklamaBilgileri] Add';
  constructor(public payload: KonaklamaTarihModel) {
  }
}

export class DeleteKonaklamaBilgileri {
  static readonly type = '[KonaklamaBilgileri] Delete';
  constructor(public id: number) {
  }
}
