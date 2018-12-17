import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {User} from '../models/user.model';

@Injectable()
export class dbService {

  userM: User;

  constructor(private http: HttpClient) { }

  getStudent(userType) {
    return this.http.get(`http://localhost:3000/${userType}`).pipe(map(data => {
        return data;
      }));
  }

  getUserId(role, id): Observable<User>  {
    return this.http.get(`http://localhost:3000/${role}/${id}`).pipe(map(data => {
      return <User>data;
    }));
  }

  createNewUser (role, user: User): Observable<User> {
    return this.http.post<User>(`http://localhost:3000/${role}`, user);
  }

  changeUser(role, student: any) {
    return this.http.put(`http://localhost:3000/${role}/${student.id}`, student);
  }

  deleteUser(role, id: any) {
    // console.log(id);
    return this.http.delete(`http://localhost:3000/${role}/${id}`);
  }

}
