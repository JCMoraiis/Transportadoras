import { Component, OnInit, Input } from '@angular/core';

import { ShippingCompany } from '../../models/shippingCompany.model';
import { ShippingCompanyService } from '../../shipping-company/shipping-company.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shipping-company-item',
  templateUrl: './shipping-company-item.component.html',
  styleUrls: ['./shipping-company-item.component.scss']
})
export class ShippingCompanyItemComponent implements OnInit {
  @Input() shippingCompany: ShippingCompany;

  constructor(
    private routes: Router,
    private shippingCompanyService: ShippingCompanyService
    ) {}

  ngOnInit() {
  }

  onEdit() {
    this.routes.navigate(['/shippingCompanyForm', this.shippingCompany.id]);
  }

  onDelete() {
    const id = this.shippingCompany.id;
    this.shippingCompanyService.deleteShippingCompany(id);
  }
}
