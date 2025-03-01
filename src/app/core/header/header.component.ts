import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private translate: TranslateService,
    public cartService: CartService,
    private router: Router) {

  }

  ngOnInit(): void {

  }

  goToCart() {
    this.router.navigate(['/cart']);
  }

  onLogoClick() {
    this.router.navigate(['/home']); 
  }

}
