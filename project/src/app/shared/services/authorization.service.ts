import {Injectable} from '@angular/core';
import {Roles} from '../roles/roles';
import {LocalStorageService} from './local-storage.service';

const stateIs = 'whoI';

const usersData = [
  {
    login: 's',
    password: '111',
    role: 'Student'
  },
  {
    login: 't',
    password: '222',
    role: 'Teacher'
  },
  {
    login: 'a',
    password: '333',
    role: 'Admin'
  }
];

@Injectable()
export class AuthorizationService {
  userIs: any = {
    [Roles.Student] : false,
    [Roles.Teacher]: false,
    [Roles.Admin]: false
  };

  constructor(private lsService: LocalStorageService) {
  }

  isAdmin() {
    return this.lsService.getItem(stateIs).Admin;
  }

  isTeacher() {
    return this.lsService.getItem(stateIs).Teacher;
  }

  isStudent() {
    return this.lsService.getItem(stateIs).Student;
  }

  authorized(isAuthorized = false) {
    if (localStorage.getItem(stateIs)) {
      const arrFlag = Object.values(this.lsService.getItem(stateIs));
      if (arrFlag.indexOf(true) !== -1) {
        return true;
      }
      return false;
    }
  }

  logIn(valueObj): boolean {
    let login = false;
    let role: string;
    usersData.forEach((obj) => {
      if (obj.login === valueObj.login && obj.password === valueObj.password) {
        login = true;
        role = obj.role;
      }
    });
    if (login) {
      this.userIs[role] = true;
      this.lsService.setItem(stateIs, this.userIs);
      return login;
    }
    return login;
  }

  logOut() {
    this.userIs = {
      [Roles.Student] : false,
      [Roles.Teacher]: false,
      [Roles.Admin]: false
    };
    this.lsService.setItem(stateIs, this.userIs);
  }

}


