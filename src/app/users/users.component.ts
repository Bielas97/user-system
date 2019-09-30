import {Component, OnInit} from '@angular/core';
import {User} from '../model/user';
import {UserService} from '../service/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[];
  private detailsUser: User = null;
  private editUser: User = null;

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.users = this.userService.getAll();
  }

  getDetailsUser(detailsUser: User) {
    this.detailsUser = detailsUser;
  }

  getEditUser(editUser: User) {
    this.editUser = editUser;
  }

}
