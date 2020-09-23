import {Injectable} from '@angular/core';
import {Resolve} from '@angular/router';
import {PricingTableState} from '../states/PricingTable.state';
import {Store} from '@ngxs/store';
import {GetPricingTable} from '../actions/pricingtable.action';

@Injectable()
export class PricingTableResolver implements Resolve<PricingTableState> {
  constructor(private store: Store) {
  }
  resolve() {
    return this.store.dispatch(new GetPricingTable());
  }
}
