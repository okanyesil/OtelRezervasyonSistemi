import { Component, OnInit } from '@angular/core';
import {Store} from '@ngxs/store';
import {AddEkstraHizmet} from '../../actions/ekstraHizmet.action';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  ara: boolean;
  airport: string;
  transportation: string;
  adult;
  children;
  baby;
  constructor(private store: Store, private  fb: FormBuilder) { }

  gelisBilgileri = this.fb.group({
    havaalani: ['', Validators.required],
    havayoluSirketi: ['', Validators.required],
    ucusKodu: ['', Validators.required],
    ucusTarihi: ['', Validators.required],
    ucusSaati: ['', Validators.required]
  });
  donusBilgileri = this.fb.group({
    havaalani: ['', Validators.required],
    havayoluSirketi: ['', Validators.required],
    ucusKodu: ['', Validators.required],
    ucusTarihi: ['', Validators.required],
    ucusSaati: ['', Validators.required]
  });

  ngOnInit(): void {
    this.ara = false;
  }
  addToCart() {
    this.store.dispatch(new AddEkstraHizmet({hizmetAdi: 'Araba', fiyat: 1000}));
  }
  open(havalani, transfer, yetiskin, cocuk, bebek) {
    this.ara = true;
    this.airport = havalani;
    this.transportation = transfer;
    this.adult = yetiskin;
    this.children = cocuk;
    this.baby = bebek;
  }
  cancel() {
    this.ara = false;
    this.donusBilgileri.reset();
    this.gelisBilgileri.reset();
  }
  onSubmit() {
  }

}
