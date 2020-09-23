import {PriceListModel} from '../Models/priceList.model';

export class GetPriceList {
  static readonly type = '[PriceList] Get';
}
export class AddPriceList {
  static readonly type = '[PriceList] Add';
  constructor(public payload: PriceListModel) {
  }
}
