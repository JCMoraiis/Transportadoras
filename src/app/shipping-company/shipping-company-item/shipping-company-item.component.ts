import { Component, OnInit, Input } from '@angular/core';

import { ShippingCompany } from '../../models/shippingCompany.model';
import { ShippingCompanyService } from '../shipping-company.service';

@Component({
  selector: 'app-shipping-company-item',
  templateUrl: './shipping-company-item.component.html',
  styleUrls: ['./shipping-company-item.component.scss']
})
export class ShippingCompanyItemComponent implements OnInit {

  @Input() shippingCompany: ShippingCompany;

  constructor(private shippingCompanyService: ShippingCompanyService) {}

  ngOnInit() {
  }

  onDelete() {
    const id = this.shippingCompany.id;
    this.shippingCompanyService.deleteShippingCompany(id);
  }

}
