import { Component, OnInit } from '@angular/core';

import { ShippingCompany } from '../models/shippingCompany.model';
import { ShippingCompanyService } from '../shipping-company/shipping-company.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  shippingCompanies: ShippingCompany[];

  constructor(private shippingCompanyService: ShippingCompanyService) {
  }
  ngOnInit() {
    this.shippingCompanyService.listShippingCompanies().subscribe(data => this.shippingCompanies = data);
  }

}
