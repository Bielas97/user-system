import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {User} from '../../model/user';
import {FormControl, FormGroup} from '@angular/forms';
import {UserService} from '../../service/user.service';
import {RoleUtils} from '../../utils/role-utils';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit, OnChanges {

  @Input() user: User;

  userForm: FormGroup;

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.userForm = new FormGroup({
      username: new FormControl(this.user.username),
      email: new FormControl(this.user.email)
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.userForm != null && changes.user !== null) {
      this.userForm.setValue({
        username: changes.user.currentValue.username,
        email: changes.user.currentValue.email
      });
    }
  }

  onSubmit(): void {
    const username = this.userForm.controls.username.value;
    const email = this.userForm.controls.email.value;
    const password = this.userForm.controls.password.value;
    const user: User = {username, email, password, role: this.user.role};

    console.log(this.user.password);
    console.log(user);
  }

}
