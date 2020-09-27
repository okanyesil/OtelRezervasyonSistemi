import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transportation',
  templateUrl: './transportation.component.html',
  styleUrls: ['./transportation.component.css']
})
export class TransportationComponent implements OnInit {
  carCheck = false;
  flightCheck = false;
  constructor() { }

  ngOnInit(): void {
  }
  carToggle() {
    if (this.carCheck === false) {
      this.carCheck = true;
    } else {
      this.carCheck = false;
    }
  }
  flightToggle() {
    if (this.flightCheck === false) {
      this.flightCheck = true;
    } else {
      this.flightCheck = false;
    }
  }

}
