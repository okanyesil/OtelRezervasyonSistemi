import {KonaklamaTarihModel} from '../Models/konaklamaTarih.model';
import {Action, Selector, State, StateContext} from '@ngxs/store';
import {Injectable} from '@angular/core';
import {AddKonaklamaBilgileri, GetKonaklamaBilgileri} from '../actions/konaklamaSuresi.model';
import {patch} from '@ngxs/store/operators';


export class KonaklamaBilgileriStateModel {
  konaklama: KonaklamaTarihModel;
}

@State<KonaklamaBilgileriStateModel>({
  name: 'konaklamaInfo',
  defaults: {
    konaklama: {girisTarihi: '', cikisTarihi: '', konaklamaSuresi: '', cocukSayisi: '', yetiskinSayisi: ''}
  }
})
@Injectable()
export class KonaklamaBilgileriState {
  @Selector()
  static getKonaklama(state: KonaklamaBilgileriStateModel) {
    return state.konaklama;
  }
  @Action(GetKonaklamaBilgileri)
  getKonaklamaBilgileri({getState, setState}: StateContext<KonaklamaBilgileriStateModel>) {
    const state = getState();
    setState({
      ...state
    });
  }
  @Action(AddKonaklamaBilgileri)
  addKonaklamaBilgileri({getState, patchState}: StateContext<KonaklamaBilgileriStateModel>, {payload}: AddKonaklamaBilgileri) {
    const state = getState();
    patchState({
      konaklama: payload
    });
  }

}
