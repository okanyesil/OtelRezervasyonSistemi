import { Component, OnInit } from '@angular/core';
import {Select, Store} from '@ngxs/store';
import {GetHotelInfo} from '../../actions/hotel.action';
import {HotelState} from '../../states/hotel.state';
import {Observable} from 'rxjs';
import {HotelInfo} from '../../Models/hotelInfo';
import {map, mergeMap, publishReplay, refCount, shareReplay, take} from 'rxjs/operators';
import {AddShoppingItem} from '../../actions/shoppingCart.action';
import {KonaklamaBilgileriState} from '../../states/konaklamaBilgileri.state';
import {KonaklamaTarihModel} from '../../Models/konaklamaTarih.model';
import {GetKonaklamaBilgileri} from '../../actions/konaklamaSuresi.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {RoomListModel} from '../../Models/roomList.model';
import {PriceListModel} from '../../Models/priceList.model';
import {InstallmentModel} from '../../Models/installment.model';
import {PricingtableModel} from '../../Models/pricingtable.model';
import {RoomListState} from '../../states/roomList.state';
import {PriceListState} from '../../states/priceList.state';
import {InstallmentState} from '../../states/installment.state';
import {GetRoomList} from '../../actions/roomList.action';
import {GetPriceList} from '../../actions/priceList.action';
import {GetInstallment} from '../../actions/installment.action';
import {GetPricingTable} from '../../actions/pricingtable.action';
import {PricingTableState} from '../../states/PricingTable.state';

@Component({
  selector: 'app-icerik',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  @Select(HotelState.getHotel)
  hotelDetail$: Observable<HotelInfo>;
  @Select(KonaklamaBilgileriState.getKonaklama)
  konaklamaBilgileri$: Observable<KonaklamaTarihModel>;
  constructor(private store: Store, private modalService: NgbModal) { }
  @Select(RoomListState.getRooms)
  roomList$: Observable<RoomListModel[]>;
  @Select(PriceListState.getPriceList)
  priceList$: Observable<PriceListModel[]>;
  @Select(InstallmentState.getInstallment)
  installment$: Observable<InstallmentModel[]>;
  @Select(PricingTableState.getPricing)
  pricingTable$: Observable<PricingtableModel[]>;
  status = false;
  installmentStatus = false;
  ngOnInit(): void {
    this.store.dispatch(new GetHotelInfo());
    this.store.dispatch(new GetKonaklamaBilgileri());
    this.store.dispatch(new GetRoomList());
    this.store.dispatch(new GetPriceList());
    this.store.dispatch(new GetInstallment());
    this.store.dispatch(new GetPricingTable());
  }
  get girisTarihi$() {
    return this.konaklamaBilgileri$.pipe(map(value => value["girisTarihi"]));
  }
  get departureDate$() {
    return this.konaklamaBilgileri$.pipe(map(value => value["cikisTarihi"]));
  }
  addToCart(item) {
    this.store
      .dispatch(new AddShoppingItem({id: item.RoomID, odaTipi: item.RoomType, fiyat: item.Netprice}));
  }
  openScrollableContent(longContent) {
    this.modalService.open(longContent, { scrollable: true });
  }
  openLg(content) {
    this.modalService.open(content, { size: 'lg' });
  }
  statusToggle() {
    if (this.status === false) {
      this.status = true;
    } else {
      this.status = false;
    }
  }
  installementStatusToggle() {
    if (this.installmentStatus === false) {
      this.installmentStatus = true;
    } else {
      this.installmentStatus = false;
    }
  }

}
