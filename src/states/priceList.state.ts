import { State, Action, StateContext, Selector } from '@ngxs/store';
import {PriceListModel} from '../Models/priceList.model';
import {Injectable} from '@angular/core';
import {AddPriceList, GetPriceList} from '../actions/priceList.action';
import {tap} from 'rxjs/operators';
import {PricelistService} from '../app/services/pricelist.service';

export class PriceListStateModel {
  priceList: PriceListModel[];
}

@State<PriceListStateModel>({
  name: 'PriceListInfo',
  defaults: {
    priceList: []
  }
})

@Injectable()
export class PriceListState {
  @Selector()
  static getPriceList(state: PriceListStateModel) {
    return state.priceList;
  }
  constructor(private priceListService: PricelistService) {
  }
  @Action(GetPriceList)
  getPriceListInfo({getState, setState}: StateContext<PriceListStateModel>) {
    return this.priceListService.getPriceList().pipe(tap(value => {
      const state = getState();
      setState({
        ...state,
        priceList: [...value]
      });
    }));
  }
  @Action(AddPriceList)
  addPriceList({getState, patchState}: StateContext<PriceListStateModel>, {payload}: AddPriceList) {
    return this.priceListService.getPriceList().pipe(tap(value => {
      const state = getState();
      patchState({
        priceList: [...state.priceList, payload]
      });
    }));
  }

}
