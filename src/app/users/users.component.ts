import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {User} from '../model/user';
import {UserService} from '../service/user.service';
import {AuthService} from '../service/auth.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  observableUsers: Observable<User[]>;
  private detailsUser: User = null;
  private editUser: User = null;
  private users: User[];

  constructor(private userService: UserService, private authService: AuthService) {
  }

  ngOnInit() {
    this.observableUsers = this.userService.getAll();
  }

  getDetailsUser(detailsUser: User) {
    this.detailsUser = detailsUser;
  }

  getEditUser(editUser: User) {
    this.editUser = editUser;
  }

  fetchData() {
    this.userService.getAll().subscribe(data => {
      this.users = data;
    });
  }

}
