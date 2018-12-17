export class User {
  readonly id: number;
  public surname: string;
  public name: string;
  public patronymic: string;
  public group?: string;
  public groups?: string[];
  public roles?: string[];
  public subjects?: {};

  constructor(id: number, surname: string, name: string, patronymic: string) {
    this.id = id;
    this.surname = surname;
    this.name = name;
    this.patronymic = patronymic;
  }
}
