import {AvailabilityModel} from '../Models/availability.model';

export class GetAvailability {
  static readonly type = '[Availability] Get';
}
export class AddAvailability {
  static readonly type = '[Availability] Add';
  constructor(public payload: AvailabilityModel) {
  }
}
