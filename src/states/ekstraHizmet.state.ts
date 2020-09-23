import {EkstraHizmetModel} from '../Models/ekstraHizmet.model';
import {Action, Selector, State, StateContext} from '@ngxs/store';
import {Injectable} from '@angular/core';
import {AddEkstraHizmet, DeleteEkstraHizmet, GetEkstraHizmet} from '../actions/ekstraHizmet.action';

export class EkstraHizmetStateModel {
  hizmetler: EkstraHizmetModel[];
}

@State<EkstraHizmetStateModel>({
  name: 'EkstraHizmet',
  defaults: {
    hizmetler: []
  }
})
@Injectable()
export class EkstraHizmetState {
  @Selector()
  static getEkstraHizmet(state: EkstraHizmetStateModel) {
    return state.hizmetler;
  }
  @Action(GetEkstraHizmet)
  getEkstraHizmet({getState, setState}: StateContext<EkstraHizmetStateModel>) {
    const state = getState();
    setState({
      ...state
    });
  }
  @Action(AddEkstraHizmet)
  addEkstraHizmet({getState, patchState}: StateContext<EkstraHizmetStateModel>, {payload}: AddEkstraHizmet) {
    const state = getState();
    patchState({
      hizmetler: [...state.hizmetler, payload]
    });
  }
  @Action(DeleteEkstraHizmet)
  deleteEkstraHizmet({getState, patchState}: StateContext<EkstraHizmetStateModel>, {payload}: DeleteEkstraHizmet) {
    const state = getState();
    patchState({
      hizmetler: [...state.hizmetler.filter(value => value.hizmetAdi !== payload.hizmetAdi)]
    });
  }

}
