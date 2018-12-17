import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {AuthorizationService} from '../shared/services/authorization.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  next: boolean = false;
  constructor(private auth: AuthorizationService, private router: Router) { }

  ngOnInit() {
    this.form = new FormGroup({
      login: new FormControl(null),
      password: new FormControl(null)
    });
  }

  onSubmit() {
    this.form.disable();
    this.next = this.auth.logIn(this.form.value);
    if (this.next) {
      this.router.navigate(['users']);
    }
    this.form.enable();
  }
}
