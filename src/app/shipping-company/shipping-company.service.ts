import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

import { ShippingCompany } from '../models/shippingCompany.model';
import { Observable, Subject } from 'rxjs';
import { ShippingCompanyRepository } from './shipping-company.repository';

@Injectable({
  providedIn: 'root'
})
export class ShippingCompanyService {

  deleteEvent = new Subject<ShippingCompany>();

  constructor(private shippingCompanyRepository: ShippingCompanyRepository) { }

  listShippingCompanies(): Observable<ShippingCompany[]> {
    return this.shippingCompanyRepository.listShippingCompanies()
      .pipe(
        map((responseData) => {
          const ShippingCompanyArray = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              ShippingCompanyArray.push({ ...responseData[key] });
            }
          }
          return ShippingCompanyArray;
        })
      );
  }

  deleteShippingCompany(id: number) {
    return this.shippingCompanyRepository.deleteShippingCompany(id);
  }
}
