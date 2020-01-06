import { Component, OnInit, OnDestroy } from '@angular/core';

import { ShippingCompany } from '../models/shippingCompany.model';
import { ShippingCompanyService } from '../shipping-company/shipping-company.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  private shippingCompanies: ShippingCompany[];
  private shippingCompaniesSub: Subscription;

  constructor(private shippingCompanyService: ShippingCompanyService) { }
  ngOnInit() {
    this.shippingCompanyService.listShippingCompanies();
    this.shippingCompaniesSub = this.shippingCompanyService.shippingCompaniesUpdated.subscribe(sc => this.shippingCompanies = sc);
  }

  ngOnDestroy() {
    this.shippingCompaniesSub.unsubscribe();
  }

}
