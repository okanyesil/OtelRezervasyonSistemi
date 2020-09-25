import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FormArray, FormGroup} from '@angular/forms';
import {AddGuestInfoService} from './add-guest-info.service';

@Injectable({
  providedIn: 'root'
})
export class CreditCardControlService {

  constructor(private http: HttpClient, private addGuestInfoService: AddGuestInfoService) { }
  controlCreditCart(payInfo: FormGroup, customerInfo: FormGroup, childrenInfo: FormArray, adultInfo: FormArray) {
    if (this.http.put<any>('', payInfo)) {
      this.addGuestInfoService.addGuestInfoDB(customerInfo, childrenInfo, adultInfo);
      return true;
    } else {
      throw new Error('Bilgiler Eklenemedi');
    }
  }
}
