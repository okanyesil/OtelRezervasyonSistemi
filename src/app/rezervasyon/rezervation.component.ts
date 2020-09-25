import { Component, OnInit } from '@angular/core';
import {Select, Store} from '@ngxs/store';
import {AddKonaklamaBilgileri} from '../../actions/konaklamaSuresi.model';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {HotelState} from '../../states/hotel.state';
import {Observable} from 'rxjs';
import {HotelInfo} from '../../Models/hotelInfo';
import {map} from 'rxjs/operators';



@Component({
  selector: 'app-rezervasyon',
  templateUrl: './rezervation.component.html',
  styleUrls: ['./rezervation.component.css']
})
export class RezervationComponent implements OnInit {
  @Select(HotelState.getHotel)
  hotelDetail$: Observable<HotelInfo>;
  firtDate: any;
  secondaDate: any;
  diffInDays: number;
  model: NgbDateStruct;
  children: number;
  adult: number;
  childrenAgeInformation = this.fb.array([]);
  constructor(private store: Store, private fb: FormBuilder) {
  }

  ngOnInit(): void {
  }
  otelAra(otelGirisTarihi: string, otelCikisTarihi: string, toplamYetiskinSayisi: string, toplamCocukSayisi: string) {
    this.firtDate = new Date(otelGirisTarihi);
    this.secondaDate = new Date(otelCikisTarihi);
    this.diffInDays = Math.floor((Date.UTC(this.secondaDate.getFullYear(), this.secondaDate.getMonth(), this.secondaDate.getDate())
      - Date.UTC(this.firtDate.getFullYear(), this.firtDate.getMonth(), this.firtDate.getDate()) ) / (1000 * 60 * 60 * 24));
    this.store.
    dispatch(new AddKonaklamaBilgileri({girisTarihi: otelGirisTarihi, cikisTarihi: otelCikisTarihi, konaklamaSuresi: (this.diffInDays)
        .toString(), yetiskinSayisi: toplamYetiskinSayisi, cocukSayisi: toplamCocukSayisi}));
    this.onSubmit();
  }
  // Cocuk Sayı sıfır değilse çocukların yaşlarının girilmesini istiyoruz. True ya da false döndürmenin amacı ngIf ile bind etme
  childrenCount(sayi) {
    this.childrenAgeInformation.clear();
    if (sayi === '0') {
      return false;
    }
    for (let i = 0; i < (sayi as number); i++) {
      this.childrenAgeInformation.push(new FormControl('', Validators.required));
    }
    return true;
  }
  onSubmit() {
    console.log(this.childrenAgeInformation.value);
  }
  get hotelPhone$() {
    return this.hotelDetail$.pipe(map(value => value.Phone));
  }
  get hotelSupportTime$() {
    return this.hotelDetail$.pipe(map(value => value.SupportTime));
  }
  arttir() {
    this.childrenCount(this.children);
    if (isNaN(this.children)) {
      this.children = 0;
    }
    this.children += 1;
    this.childrenCount(this.children);
  }
  azalt() {
    if (isNaN(this.children)) {
      this.children = 0;
    }
    if (this.children !== 0) {
      this.children -= 1;
    }
    this.childrenCount(this.children);
  }
  adultArttir() {
    if (isNaN(this.adult)) {
      this.adult = 0;
    }
    this.adult += 1;
  }
  adultAzalt() {
    if (isNaN(this.adult)) {
      this.adult = 0;
    }
    if (this.adult !== 0) {
      this.adult -= 1;
    }
  }

}
