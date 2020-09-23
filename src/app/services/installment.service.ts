import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {InstallmentModel} from '../../Models/installment.model';

@Injectable({
  providedIn: 'root'
})
export class InstallmentService {

  constructor(private http: HttpClient) { }
  getInstallment(): Observable<InstallmentModel[]> {
    return this.http.get<InstallmentModel[]>('http://localhost:3003/installment');
  }
}
