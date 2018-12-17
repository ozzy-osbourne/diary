import { Component, OnInit } from '@angular/core';
import {User} from '../shared/models/user.model';
import {ActivatedRoute, Router} from '@angular/router';
import {dbService} from '../shared/services/db.service';
import {AuthorizationService} from '../shared/services/authorization.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  id: number;
  input: any;
  val: number;
  user: User;
  role: any;
  groups: string[] = ['Group-A1', 'Group-B2', 'Group-C3'];

  constructor(private route: ActivatedRoute, private router: Router, private dbService: dbService, private auth: AuthorizationService) { }

  ngOnInit() {
    this.getUser();
    this.id = +this.route.snapshot.paramMap.get('id');
  }

  getUser(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    const role = this.route.snapshot.paramMap.get('0');
    this.dbService.getUserId(role, id)
      .subscribe((user) => {
        this.user = user;
        this.role = this.user.roles[0];
      });
  }

  deleteUser() {
    const role = this.route.snapshot.paramMap.get('0');
    this.dbService.deleteUser(role, this.id).subscribe(() => console.log('user deleted'));
    this.router.navigate(['/users']);
  }

  Back(): void { this.router.navigate(['/users']); }
  authCompare() { return this.auth.isStudent(); }

  changeInfo(value) {
    switch (value) {
      case 1:
        this.input = this.user.surname;
        this.val = 1;
        break;
      case 2:
        this.input = this.user.name;
        this.val = 2;
        break;
      case 3:
        this.input = this.user.patronymic;
        this.val = 3;
        break;
      case 4:
        this.input = this.user.group;
        this.val = 4;
        break;
    }
  }

  updateInfo(value) {
    console.log(this.user);
    switch (this.val) {
      case 1:
        this.user.surname = value;
        break;
      case 2:
        this.user.name = value;
        break;
      case 3:
        this.user.patronymic = value;
        break;
      case 4:
        this.user.group = value;
        break;
    }
    this.dbService.changeUser(this.role, this.user).subscribe(() => console.log('user changed'));
    this.val = undefined;
  }

}
