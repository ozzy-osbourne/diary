import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthorizationService} from '../shared/services/authorization.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {

  constructor(private  router: Router, private auth: AuthorizationService) { }

  toLogin() {
    // console.log(this.auth.authorized());
    this.router.navigate(['/login']);
  }

  logOut() {
    this.auth.logOut();
    this.router.navigate(['/']);
  }

  IsAuthorize() {
    return this.auth.authorized();
  }

}
