import { Injectable } from '@angular/core';
import { ShippingCompany } from '../models/shippingCompany.model';

@Injectable({
  providedIn: 'root'
})
export class ShippingCompanyService {

  shippingCompanies: ShippingCompany[] = [
    {
      name: 'Xadrez - Rodoaéreo',
      image: 'https://i.etsystatic.com/13221305/r/il/a22aa5/1217314060/il_570xN.1217314060_jha1.jpg',
      email: 'qualidade@teste.com.br',
      phone: '(81) 3499-8439',
      modal: 'teste',
      street: 'Rua Presidente Kennedy',
      postcode: '40',
      neighborhood: 'Peixinhos',
      city: 'Olinda',
      state: 'Pernambuco'
    },
    {
      name: 'Blackhat',
      image: 'https://www.brandcrowd.com/gallery/brands/pictures/picture14252643624297.png',
      email: 'qualidade@teste.com.br',
      phone: '(81) 3499-8439',
      modal: 'teste',
      street: 'Rua Solenya',
      postcode: '75',
      neighborhood: 'Peixinhos',
      city: 'Olinda',
      state: 'Pernambuco'
    }
  ];

  constructor() { }

  getShippingCompanies(): ShippingCompany[] {
    return this.shippingCompanies;
  }

}
