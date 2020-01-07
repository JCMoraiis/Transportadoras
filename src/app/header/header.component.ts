import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, RoutesRecognized } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  private buttonStatus: string;
  private buttonStatusSub: Subscription;

  constructor(private router: Router) { }

  ngOnInit() {
    this.buttonStatusSub = this.router.events.subscribe((data) => {
      if (data instanceof RoutesRecognized) {
        this.buttonStatus = data.state.root.firstChild.data['buttonStatus'];
      }
    });
  }

  onButton() {
    if (this.buttonStatus === 'home') {
      this.router.navigate(['/shippingCompanyForm']);
    } else if (this.buttonStatus === 'form') {
      this.router.navigate(['/home']);
    }
  }

  ngOnDestroy() {
    this.buttonStatusSub.unsubscribe();
  }

}
