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

  shippingCompanyForm: FormGroup;
  public isEditable = false;
  constructor(
    private formBuilder: FormBuilder,
    private shippingCompanyService: ShippingCompanyService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    ) { }

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

    if (this.activatedRoute.snapshot.params.id) {
      this.isEditable = true;
      this.shippingCompanyService
        .getShippingCompany(this.activatedRoute.snapshot.params.id)
        .subscribe(r => {
          this.shippingCompanyForm.setValue(r);
        });
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
      this.shippingCompanyService
        .updatedShippingCompany(this.shippingCompanyForm.value, this.activatedRoute.snapshot.params.id);
      this.router.navigate(['home']);
    }
  }
  onCancel() {
    this.router.navigate(['home']);
  }

}
