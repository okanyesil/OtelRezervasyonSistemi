import {Injectable} from '@angular/core';
import {PricingtableModel} from '../Models/pricingtable.model';
import {Action, Selector, State, StateContext} from '@ngxs/store';
import {AddPricingTable, GetPricingTable} from '../actions/pricingtable.action';
import {tap} from 'rxjs/operators';
import {PricingTableService} from '../app/services/pricing-table.service';
export class PricingTableStateModel {
  pricingTable: PricingtableModel[];
}
@State<PricingTableStateModel>({
  name: 'pricingTables',
  defaults: {
    pricingTable: []
  }
})

@Injectable()
export class PricingTableState {
  @Selector()
  static getPricing(state: PricingTableStateModel) {
    return state.pricingTable;
  }
  constructor(private pricingTableService: PricingTableService) {
  }
  @Action(GetPricingTable)
  getPricingTables({getState, setState}: StateContext<PricingTableStateModel>) {
    return this.pricingTableService.getPricing().pipe(tap(value => {
      const state = getState();
      setState({
        ...state,
        pricingTable: [...value]
      });
    }));
  }
  @Action(AddPricingTable)
  addPricingTable({getState, patchState}: StateContext<PricingTableStateModel>, {payload}: AddPricingTable) {
    return this.pricingTableService.getPricing().pipe(tap(value => {
      const state = getState();
      patchState({
        pricingTable: [...state.pricingTable, payload]
      });
    }));
  }
}
