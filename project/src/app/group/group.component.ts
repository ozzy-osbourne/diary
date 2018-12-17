import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {dbService} from '../shared/services/db.service';
import {Location} from '@angular/common';
import {User} from '../shared/models/user.model';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {

  group: string;
  users: any;
  displayedColumns: string[] = ['id', 'surname', 'name', 'patronymic'];

  constructor(private route: ActivatedRoute, private dbService: dbService, private location: Location) {}

  ngOnInit() {
    this.group = this.route.snapshot.paramMap.get('group');
    let groupz = this.route.snapshot.paramMap.get('group');

    this.dbService.getStudent('student').subscribe((users: User[]) => {
      const userz = [];
      users.forEach(function (value: any, index: any) {
        if (value.group === groupz) {
          userz.push(value);
        }
      });
      this.users = userz;
    });
  }

  Back() {
    this.location.back();
  }

}
