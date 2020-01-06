import { Injectable } from '@angular/core';

import { ShippingCompanyRepository } from './shipping-company.repository';
import { ShippingCompany } from '../models/shippingCompany.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShippingCompanyService {

  private shippingCompanies: ShippingCompany[] = [];
  shippingCompaniesUpdated = new Subject<ShippingCompany[]>();

  constructor(private shippingCompanyRepository: ShippingCompanyRepository) { }

  listShippingCompanies() {
    this.shippingCompanyRepository.listShippingCompanies().subscribe(sc => {
      this.shippingCompanies = sc;
      this.shippingCompaniesUpdated.next([...this.shippingCompanies]);
    });
  }

  deleteShippingCompany(id: number) {
    this.shippingCompanyRepository.deleteShippingCompany(id).subscribe(() => {
      this.shippingCompanies = this.shippingCompanies.filter(sc => sc.id !== id);
      this.shippingCompaniesUpdated.next([...this.shippingCompanies]);
    });
  }
}
