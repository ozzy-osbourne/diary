import {Component, OnInit} from '@angular/core';
import {User} from '../shared/models/user.model';
import {dbService} from '../shared/services/db.service';
import {Router} from '@angular/router';
import {AuthorizationService} from '../shared/services/authorization.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  role: string;
  users: User[] = [];
  displayedColumns: string[] = ['id', 'surname', 'name', 'patronymic'];

  constructor(private dbService: dbService, private router: Router, private auth: AuthorizationService) {
  }

  ngOnInit() {
    this.dbService.getStudent('student')
      .subscribe((users: User[]) => {
        this.users = users;
      });
    this.role = 'студентов';
  }

  showStudents() {
    this.dbService.getStudent('student')
      .subscribe((users: User[]) => {
        this.users = users;
      });
    this.role = 'студентов';
  }

  showTeachers() {
    this.dbService.getStudent('teacher')
      .subscribe((users: User[]) => {
        this.users = users;
      });
    this.role = 'учителей';
  }

  logOut() {
    this.auth.logOut();
    this.router.navigate(['/']);
  }

  ToCreate() {
    this.router.navigate(['/createUser']);
  }

  authCompare() {
    return this.auth.isAdmin();
  }

}
