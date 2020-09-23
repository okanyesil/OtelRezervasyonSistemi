import {Injectable} from '@angular/core';
import {Resolve} from '@angular/router';
import {Store} from '@ngxs/store';
import {GetShoppingCart} from '../actions/shoppingCart.action';
import {ShoppingCartModel} from '../Models/shoppingCart.model';

@Injectable()
export class ShoppingCartResolver implements Resolve<ShoppingCartModel>{
  constructor(private store: Store) {
  }
  resolve() {
    return this.store.dispatch(new GetShoppingCart());
  }

}
