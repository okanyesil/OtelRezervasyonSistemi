import { Component, OnInit } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {KonaklamaBilgileriState} from '../../states/konaklamaBilgileri.state';
import {Select, Store} from '@ngxs/store';
import {from, Observable, of} from 'rxjs';
import {KonaklamaTarihModel} from '../../Models/konaklamaTarih.model';
import {map, mergeMap} from 'rxjs/operators';
import {AddEkstraHizmet} from '../../actions/ekstraHizmet.action';
import {ShoppingCartState} from '../../states/shoppingCart.state';
import {ShoppingCartModel} from '../../Models/shoppingCart.model';
import {EkstraHizmetState} from '../../states/ekstraHizmet.state';
import {EkstraHizmetModel} from '../../Models/ekstraHizmet.model';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-kisisel-bilgiler',
  templateUrl: './personel-information.component.html',
  styleUrls: ['./personel-information.component.css']
})
export class PersonelInformationComponent implements OnInit {
  @Select(KonaklamaBilgileriState.getKonaklama)
  konaklamaBilgileri$: Observable<KonaklamaTarihModel>;
  @Select(ShoppingCartState.getShoppingItems)
  shoppingCart$: Observable<ShoppingCartModel[]>;
  @Select(EkstraHizmetState.getEkstraHizmet)
  ekstraHizmet$: Observable<EkstraHizmetModel[]>;
  tutar;
  ySayisi: unknown;
  cSayisi: unknown;
  personelInformation = this.fb.group({
    adSoyad: ['', Validators.required],
    email: ['', Validators.required],
    telefon: ['', [Validators.required, Validators.minLength(11)]],
    tcKimlikNo: ['', [Validators.required, Validators.minLength(11)]],
    misafirNotu: ['']
  });
  payInformation = this.fb.group({
    kartNumarasi: ['', Validators.required],
    kartUzerindekiIsim: ['', Validators.required],
    kartAyYil: ['', Validators.required],
    kartGuvenlikKodu: ['', Validators.required]
  });
  costumerInformation = this.fb.array([]);
  childrenInformation = this.fb.array([]);

  constructor(private store: Store, private modalService: NgbModal, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.konaklamaBilgileri$.subscribe(value => {
      this.ySayisi = value.yetiskinSayisi;
      this.cSayisi = value.cocukSayisi;
      this.costumerInformation.clear();
      this.childrenInformation.clear();
      for (let i = 0; i < (this.ySayisi as number); i++) {
        this.costumerInformation.push(new FormControl());
      }
      for (let i = 0; i < (this.cSayisi as number); i++) {
        this.childrenInformation.push(new FormControl('', Validators.required));
      }
    });
  }
  openScrollableContent(longContent) {
    this.modalService.open(longContent, { scrollable: true });
  }
  hizmetEkle() {
    this.store.dispatch(new AddEkstraHizmet({hizmetAdi: 'Oda İptal Garantisi', fiyat: 35}));
  }
  get sepetTutari() {
    this.tutar = 0;
    this.shoppingCart$.pipe(mergeMap(value => value), map(value => value["fiyat"])).subscribe(value => {
      this.tutar += parseFloat(String(value));
    });
    this.ekstraHizmet$.pipe(mergeMap(value => value), map(value => value["fiyat"])).subscribe(value => {
      this.tutar += parseFloat(String(value));
    });
    return this.tutar;
  }
  onSubmit() {
    console.log(this.personelInformation.value);
    console.log(this.costumerInformation.value);
  }


}
