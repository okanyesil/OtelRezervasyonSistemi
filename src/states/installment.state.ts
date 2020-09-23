import { State, Action, StateContext, Selector } from '@ngxs/store';
import {InstallmentModel} from '../Models/installment.model';
import {Injectable} from '@angular/core';
import {AddInstallent, GetInstallment} from '../actions/installment.action';
import {tap} from 'rxjs/operators';
import {InstallmentService} from '../app/services/installment.service';

export class InstallmentStateModel {
  installment: InstallmentModel[];
}
@State<InstallmentStateModel>({
  name: 'InstallmentInfo',
  defaults: {
    installment: []
  }
})

@Injectable()
export class InstallmentState {
  @Selector()
  static getInstallment(state: InstallmentStateModel) {
    return state.installment;
  }
  constructor(private installmentService: InstallmentService) {
  }
  @Action(GetInstallment)
  getInstallmentInfo({getState, setState}: StateContext<InstallmentStateModel>) {
    return this.installmentService.getInstallment().pipe(tap(value => {
      const state = getState();
      setState({
        ...state,
        installment: [...value]
      });
    }));
  }
  @Action(AddInstallent)
  addInstallment({getState, patchState}: StateContext<InstallmentStateModel>, {payload}: AddInstallent) {
    return this.installmentService.getInstallment().pipe( tap(value => {
      const state = getState();
      patchState({
        installment: [...state.installment, payload]
      });
      })
    );
  }

}
