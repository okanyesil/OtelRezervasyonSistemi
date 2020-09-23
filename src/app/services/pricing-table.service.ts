import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {PricingtableModel} from '../../Models/pricingtable.model';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PricingTableService {

  constructor(private http: HttpClient) { }
  getPricing(): Observable<PricingtableModel[]> {
    return this.http.get<PricingtableModel[]>('http://localhost:3004/pricingTable');
  }
}
