import {Injectable} from '@angular/core';
import {Resolve} from '@angular/router';
import {KonaklamaTarihModel} from '../Models/konaklamaTarih.model';
import {Store} from '@ngxs/store';
import {GetKonaklamaBilgileri} from '../actions/konaklamaSuresi.model';

@Injectable()
export class KonaklamaBilgileriResolver implements Resolve<KonaklamaTarihModel>{
  constructor(private store: Store) {
  }
  resolve() {
    return this.store.dispatch(new GetKonaklamaBilgileri());
  }
}
