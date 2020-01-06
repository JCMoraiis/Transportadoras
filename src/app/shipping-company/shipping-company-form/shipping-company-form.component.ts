import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ShippingCompanyService } from '../shipping-company.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shipping-company-form',
  templateUrl: './shipping-company-form.component.html',
  styleUrls: ['./shipping-company-form.component.scss']
})
export class ShippingCompanyFormComponent implements OnInit {

  shippingCompanyForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private shippingCompanyService: ShippingCompanyService,
    private router: Router) { }

  ngOnInit() {
    this.shippingCompanyForm = this.formBuilder.group({
      name:   ['',
          [
              Validators.required,
              Validators.minLength(4),
              Validators.maxLength(40)
          ]
      ],
      email:  ['',
          [
              Validators.required,
              Validators.email
          ]
      ],
      company:      ['', Validators.required],
      phone:        ['', Validators.required],
      modal:        ['', Validators.required],
      street:       ['', Validators.required],
      houseNumber:  ['', Validators.required],
      postCode:     [''],
      neighborhood: ['', Validators.required],
      state:        ['', Validators.required],
      city:         ['', Validators.required],
      image:        [''],
    });
  }

  onCreate() {
    if (this.shippingCompanyForm.valid) {
      this.shippingCompanyService.createShippingCompany(this.shippingCompanyForm.value);
      this.router.navigate(['home']);
    }
  }

}
