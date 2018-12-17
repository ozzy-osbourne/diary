import { User } from './user.model';

export class Student extends User {
  public group: string;
  public roles: string[];
  public subjects: {};

  constructor(objectUser) {
    super(objectUser.id, objectUser.surname, objectUser.name, objectUser.patronymic);
    this.group = objectUser.group;
    this.roles = objectUser.roles;
    this.subjects = objectUser.subjects;
  }
}
