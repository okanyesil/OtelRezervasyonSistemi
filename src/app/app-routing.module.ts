import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PersonelInformationComponent} from './personel-information/personel-information.component';
import {ContentComponent} from './content/content.component';
import {ConfirmationComponent} from './confirmation/confirmation.component';
import {HotelResolver} from '../resolvers/hotel.resolver';
import {ShoppingCartResolver} from '../resolvers/shoppingCart.resolver';
import {CarComponent} from './car/car.component';
import {FlightComponent} from './flight/flight.component';
import {TransportationComponent} from './transportation/transportation.component';


const routes: Routes = [
  {path: 'personel-information', component: PersonelInformationComponent, resolve: [HotelResolver]},
  {path: 'content', component: ContentComponent, resolve: [ShoppingCartResolver]},
  {path: 'check', component: ConfirmationComponent},
  {path: '', component: ContentComponent},
  {path: 'car', component: CarComponent},
  {path: 'flight', component: FlightComponent},
  {path: 'transportation', component: TransportationComponent},
  {path: '**', component: ContentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
