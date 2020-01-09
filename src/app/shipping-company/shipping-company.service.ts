import { Injectable } from '@angular/core';

import { ShippingCompanyRepository } from './shipping-company.repository';
import { ShippingCompany } from '../models/shippingCompany.model';
import { Subject, Observable } from 'rxjs';
import { ShippingCompanyFormComponent } from './shipping-company-form/shipping-company-form.component';

@Injectable({
  providedIn: 'root'
})
export class ShippingCompanyService {

  private shippingCompanies: ShippingCompany[] = [];
  shippingCompaniesUpdated = new Subject<ShippingCompany[]>();
  constructor(private shippingCompanyRepository: ShippingCompanyRepository) { }
  getShippingCompany(id: number) {
    return this.shippingCompanyRepository.getShippingCompany(id);
  }
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
  updatedShippingCompany(shippingCompany: ShippingCompany, id: number) {
    shippingCompany.id = id;
    this.shippingCompanyRepository.updatedShippingCompany(shippingCompany)
    .subscribe(() => {
    this.listShippingCompanies();
  });
  }
  deleteShippingCompany(id: number) {
    this.shippingCompanyRepository.deleteShippingCompany(id).subscribe(() => {
      this.shippingCompanies = this.shippingCompanies.filter(sc => sc.id !== id);
      this.shippingCompaniesUpdated.next([...this.shippingCompanies]);
    });
  }
}
