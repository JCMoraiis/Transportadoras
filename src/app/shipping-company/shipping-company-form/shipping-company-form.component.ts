import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ShippingCompanyService } from '../shipping-company.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-shipping-company-form',
  templateUrl: './shipping-company-form.component.html',
  styleUrls: ['./shipping-company-form.component.scss']
})
export class ShippingCompanyFormComponent implements OnInit {

  private updating = false;

  shippingCompanyForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private shippingCompanyService: ShippingCompanyService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {

    this.shippingCompanyForm = this.formBuilder.group({
      id: [],
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

    const id = +this.route.snapshot.params.id;
    if (id) {
      this.updating = true;
      this.shippingCompanyForm.setValue(this.shippingCompanyService.getShippingCompany(id));
    }
  }

  onCreate() {
    if (this.shippingCompanyForm.valid) {
      this.shippingCompanyService.createShippingCompany(this.shippingCompanyForm.value);
      this.router.navigate(['home']);
    }
  }

  onUpdate() {
    if (this.shippingCompanyForm.valid) {
      this.shippingCompanyService.updateShippingCompany(this.shippingCompanyForm.value);
      this.router.navigate(['home']);
    }
  }

  onCancel() {
    this.router.navigate(['home']);
  }

}
