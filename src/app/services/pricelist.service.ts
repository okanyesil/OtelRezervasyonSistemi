import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {PriceListModel} from '../../Models/priceList.model';

@Injectable({
  providedIn: 'root'
})
export class PricelistService {

  constructor(private http: HttpClient) { }
   getPriceList(): Observable<PriceListModel[]> {
    return this.http.get<PriceListModel[]>('http://localhost:3002/PriceList');
  }
}
