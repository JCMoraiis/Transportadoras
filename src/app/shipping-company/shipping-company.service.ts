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

  createShippingCompany(sc: ShippingCompany) {
    // true: sc.id = ultimo id + 1 | false: sc.id = 1
    sc.id = this.shippingCompanies.length ? this.shippingCompanies[this.shippingCompanies.length - 1].id + 1 : 1;

    this.shippingCompanyRepository.createShippingCompany(sc).subscribe(() => {
      this.shippingCompanies.push(sc);
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
