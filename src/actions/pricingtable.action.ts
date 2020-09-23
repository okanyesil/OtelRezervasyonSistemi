import {PricingtableModel} from '../Models/pricingtable.model';

export class GetPricingTable {
  static readonly type = '[PricingTable] Get';
}
export class AddPricingTable {
  static readonly type = '[PricingTable] Add';
  constructor(public payload: PricingtableModel) {
  }
}
