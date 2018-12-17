import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {User} from '../shared/models/user.model';
import {dbService} from '../shared/services/db.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-new-user-form',
  templateUrl: './new-user-form.component.html',
  styleUrls: ['./new-user-form.component.css']
})
export class NewUserFormComponent implements OnInit {

  form: FormGroup;
  user: User;
  groups: string[] = ['Group-A1', 'Group-B2', 'Group-C3'];
  userRoles: string[] = ['student', 'teacher'];
  constructor(private dbService: dbService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.form = new FormGroup({
      surname: new FormControl(null),
      name: new FormControl(null),
      patronymic: new FormControl(null),
      roles: new FormControl(null),
      group: new FormControl(null),
    });
  }

  AddUser() {
    const newUser = this.form.value;
    const role = newUser.roles;
    newUser.roles = [newUser.roles];
    if (role === 'student') {
      newUser.subjects = {
        '1': ['', '', '', '', ''],
        '2': ['', '', '', '', ''],
        '3': ['', '', '', '', '']
      };
    }
    this.dbService.createNewUser(role, newUser).subscribe(() => console.log('user created'));
    this.router.navigate(['/users']);
  }

  Back(): void {
    this.router.navigate(['/users']);
  }

}
