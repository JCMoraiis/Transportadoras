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

  constructor(private shippingCompanyService: ShippingCompanyService) { }
  ngOnInit() {
    // inicializar dados na tela
    this.shippingCompanyService.listShippingCompanies().subscribe(data => this.shippingCompanies = data);

    // atualizar array ao item ser removido do banco de dados
    this.shippingCompanyService.deleteEvent.subscribe(item => {
      this.shippingCompanies = this.shippingCompanies.filter(shippingCompany => shippingCompany.id !== item.id);
    });
  }

}
