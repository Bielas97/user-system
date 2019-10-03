import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {User} from '../../model/user';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.css']
})
export class UsersTableComponent implements OnInit {

  config: any;
  @Input() users: User[];

  public labels: any = {
    previousLabel: '',
    nextLabel: '',
    screenReaderPaginationLabel: 'Pagination',
    screenReaderPageLabel: 'page',
    screenReaderCurrentLabel: `You're on page`
  };

  constructor() {
  }

  ngOnInit() {
    this.config = {
      itemsPerPage: 5,
      currentPage: 1,
      totalItems: this.users.length
    };
  }


  pageChanged(event) {
    this.config.currentPage = event;
  }
}
