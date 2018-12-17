import {User} from './user.model';

export class Teacher extends User {
  public groups: string[];
  public roles: string[];
  public subjects: string;

  constructor(objectUser) {
    super(objectUser.id, objectUser.surname, objectUser.name, objectUser.patronymic);
    this.groups = objectUser.groups;
    this.roles = objectUser.roles;
    this.subjects = objectUser.subjects;
  }
}
