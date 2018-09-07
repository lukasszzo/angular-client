import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {

  addressItem$: Object;

  constructor(private addressData: DataService) { }

  ngOnInit() {
    this.addressData.getAddress().subscribe(
      addressData => this.addressItem$ = addressData
    )
  }

}
