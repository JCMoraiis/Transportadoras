import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ShippingCompany } from '../models/shippingCompany.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShippingCompanyRepository {

  constructor(private http: HttpClient) { }

  listShippingCompanies(): Observable<ShippingCompany[]> {
    return this.http.get<ShippingCompany[]>('http://localhost:3000/ShippingCompany');
  }

  createShippingCompany(sc: ShippingCompany) {
    return this.http.post('http://localhost:3000/ShippingCompany', sc);
  }

  deleteShippingCompany(id: number) {
    return this.http.delete('http://localhost:3000/ShippingCompany/' + id);
  }
}
