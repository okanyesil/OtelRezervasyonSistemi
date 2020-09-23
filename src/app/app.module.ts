import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { RezervasyonComponent } from './rezervasyon/rezervasyon.component';
import { ShoppingCartComponent } from './shoppingCart/shopping-cart.component';
import { ContentComponent } from './content/content.component';
import { PersonelInformationComponent } from './personel-information/personel-information.component';
import { OnayComponent } from './onay/onay.component';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgxsModule} from '@ngxs/store';
import {HotelState} from '../states/hotel.state';
import {HotelResolver} from '../resolvers/hotel.resolver';
import {ShoppingCartResolver} from '../resolvers/shoppingCart.resolver';
import {ShoppingCartState} from '../states/shoppingCart.state';
import {EkstraHizmetState} from '../states/ekstraHizmet.state';
import {EkstraHizmetResolver} from '../resolvers/EkstraHizmet.resolver';
import {KonaklamaBilgileriState} from '../states/konaklamaBilgileri.state';
import {KonaklamaBilgileriResolver} from '../resolvers/konaklamaBilgileri.resolver';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { CarComponent } from './car/car.component';
import { FlightComponent } from './flight/flight.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material/tabs';
import {MatStepperModule} from '@angular/material/stepper';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {RoomListState} from '../states/roomList.state';
import {InstallmentState} from '../states/installment.state';
import {PriceListState} from '../states/priceList.state';
import {RoomListResolver} from '../resolvers/roomList.resolver';
import {PricingTableState} from '../states/PricingTable.state';
import {PricingTableResolver} from '../resolvers/pricingTable.resolver';
import {HotelService} from './services/hotel.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RezervasyonComponent,
    ShoppingCartComponent,
    ContentComponent,
    PersonelInformationComponent,
    OnayComponent,
    CarComponent,
    FlightComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgbModalModule,
    HttpClientModule,
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsLoggerPluginModule.forRoot(),
    ReactiveFormsModule,
    NgxsModule.forRoot([HotelState, ShoppingCartState, EkstraHizmetState, KonaklamaBilgileriState, RoomListState, InstallmentState, PriceListState, PricingTableState]),
    FormsModule,
    BrowserAnimationsModule,
    MatStepperModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatSelectModule
  ],
  providers: [HotelService, HotelResolver, ShoppingCartResolver, EkstraHizmetResolver, KonaklamaBilgileriResolver, RoomListResolver, PricingTableResolver],
  bootstrap: [AppComponent],
})
export class AppModule { }
