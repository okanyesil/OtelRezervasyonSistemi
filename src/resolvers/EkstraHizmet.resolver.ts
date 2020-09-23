import {Resolve} from '@angular/router';
import {EkstraHizmetModel} from '../Models/ekstraHizmet.model';
import {Store} from '@ngxs/store';
import {GetEkstraHizmet} from '../actions/ekstraHizmet.action';
import {Injectable} from '@angular/core';
@Injectable()
export class EkstraHizmetResolver implements Resolve<EkstraHizmetModel> {
  constructor(private store: Store) {
  }
  resolve() {
    return this.store.dispatch(new GetEkstraHizmet());
  }
}
