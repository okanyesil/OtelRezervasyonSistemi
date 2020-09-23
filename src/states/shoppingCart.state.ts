import {ShoppingCartModel} from '../Models/shoppingCart.model';
import {Action, Selector, State, StateContext} from '@ngxs/store';
import {Injectable} from '@angular/core';
import {AddShoppingItem, DeleteShoppingItem, GetShoppingCart} from '../actions/shoppingCart.action';

export class ShoppingCartStateModel {
  shoppingItems: ShoppingCartModel[];
}

@State<ShoppingCartStateModel>({
  name: 'ShoppingItem',
  defaults: {
    shoppingItems: []
  }
})
@Injectable()
export class ShoppingCartState {
  @Selector()
  static getShoppingItems(state: ShoppingCartStateModel) {
    return state.shoppingItems;
  }
  @Action(GetShoppingCart)
  getShoppingCart({getState, setState}: StateContext<ShoppingCartStateModel>) {
    const state = getState();
    setState({
      ...state
    });
  }
  @Action(AddShoppingItem)
  addShoppingItem({getState, patchState}: StateContext<ShoppingCartStateModel>, {payload}: AddShoppingItem) {
    const state = getState();
    patchState({
      shoppingItems: [...state.shoppingItems, payload]
    });

  }
  @Action(DeleteShoppingItem)
  deleteShoppingItem({getState, patchState}: StateContext<ShoppingCartStateModel>, {payload}: DeleteShoppingItem) {
    const state = getState();
    patchState({
      shoppingItems: [...state.shoppingItems.filter(value => value.id !== payload.id)]
    });
  }
}
