import {ShoppingCartModel} from '../Models/shoppingCart.model';

export class GetShoppingCart {
  static readonly type = '[ShoppingCart] Get';
}
export class AddShoppingItem {
  static readonly type = '[ShoppingCart] Add';
  constructor(public payload: ShoppingCartModel) {
  }
}
export class DeleteShoppingItem {
  static readonly type = '[ShoppingCart] Delete';
  constructor(public payload: ShoppingCartModel) {
  }
}
