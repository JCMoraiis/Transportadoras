import { Component, OnInit, Input } from '@angular/core';

import { ShippingCompany } from '../models/shippingCompany.model';

@Component({
  selector: 'app-shipping-company',
  templateUrl: './shipping-company.component.html',
  styleUrls: ['./shipping-company.component.scss']
})
export class ShippingCompanyComponent implements OnInit {

  @Input() shippingCompany: ShippingCompany;

  constructor() {}

  ngOnInit() {
  }

}
