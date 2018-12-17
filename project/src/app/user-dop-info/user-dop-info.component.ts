import { Component, OnInit } from '@angular/core';
import {User} from '../shared/models/user.model';
import {ActivatedRoute} from '@angular/router';
import {dbService} from '../shared/services/db.service';

@Component({
  selector: 'app-user-dop-info',
  templateUrl: './user-dop-info.component.html',
  styleUrls: ['./user-dop-info.component.css']
})
export class UserDopInfoComponent implements OnInit {

  user: User;
  subIndex: any;
  IDx: any;
  markU: any;
  role: any;
  markForm: boolean = false;
  days: string[] = ['1', '2', '3', '4', '5'];
  subjectsIndex: string[];
  subjectsName: string[] = ['Информатика', 'Математика', 'Русский язык', 'Английский язык'];
  displayedColumns: string[];

  constructor(private route: ActivatedRoute, private dbService: dbService) { }

  ngOnInit() {
    this.getUser();
  }

  getUser(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    const role = this.route.snapshot.paramMap.get('0');
    this.dbService.getUserId(role, id)
      .subscribe((user) => {
        this.user = user;
        this.role = this.user.roles[0];
        if (this.user.roles[0] === 'student') {
          if (this.user.subjects) {
            this.subjectsIndex = Object.keys(this.user.subjects);
          }
        } else if (user.roles.indexOf('teacher') !== -1) {
          this.displayedColumns = ['groups'];
        }
      });
  }


  changeGrade(subIdx, idx) {
    this.markU = this.user.subjects[subIdx][idx];
    this.subIndex = subIdx;
    this.IDx = idx;
    this.markForm = !this.markForm;
    return this.user.subjects[subIdx][idx];
  }

  update(subIdx, idx) {
    const userCopy = this.user;
    userCopy.subjects[subIdx][idx] = this.markU;
    this.dbService.changeUser('student', this.user).subscribe(() => console.log('user changed'));
    this.subIndex = undefined;
    this.IDx = undefined;
  }

}
