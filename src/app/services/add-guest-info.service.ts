import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FormArray, FormGroup} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AddGuestInfoService {

  constructor(private http: HttpClient) { }

  addGuestInfoDB(customerInfo: FormGroup, childrenInfo: FormArray, adultInfo: FormArray) {
    this.http.put('', customerInfo);
    this.http.put('', childrenInfo);
    this.http.put('', adultInfo);
  }
}
