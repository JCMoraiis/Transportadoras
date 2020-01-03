import { Component, OnInit, Input } from '@angular/core';

import { ShippingCompany } from '../models/shippingCompany.model';
import { ShippingCompanyService } from './shipping-company.service';

@Component({
  selector: 'app-shipping-company',
  templateUrl: './shipping-company.component.html',
  styleUrls: ['./shipping-company.component.scss']
})
export class ShippingCompanyComponent implements OnInit {

  @Input() shippingCompany: ShippingCompany;

  constructor(private shippingCompanyService: ShippingCompanyService) {}

  ngOnInit() {
  }

  onDelete() {
    const id = this.shippingCompany.id;
    this.shippingCompanyService.deleteShippingCompany(id).subscribe(() => {
      this.shippingCompanyService.deleteEvent.next(this.shippingCompany);
    });
  }

}
