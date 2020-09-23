import {InstallmentModel} from '../Models/installment.model';

export class GetInstallment {
  static readonly type = '[Installment] Get';
}
export class AddInstallent {
  static readonly type = '[Installment] Add';
  constructor(public payload: InstallmentModel) {
  }
}
