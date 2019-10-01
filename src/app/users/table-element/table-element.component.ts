import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from '../../model/user';
import {UserService} from '../../service/user.service';
import {Role} from '../../model/role';

@Component({
  selector: 'app-table-element',
  templateUrl: './table-element.component.html',
  styleUrls: ['./table-element.component.css']
})
export class TableElementComponent implements OnInit {

  @Input() user: User;
  @Input() index: number;
  @Output() detailsUser = new EventEmitter<User>();
  @Output() editUser = new EventEmitter<User>();

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  onDetailsClicked() {
    this.detailsUser.emit(this.user);
  }

  onEditClicked() {
    this.editUser.emit(this.user);
  }

  onDeleteClicked() {
    this.userService.delete(this.user.id);
    this.editUser.emit(null);
    this.detailsUser.emit(null);
  }

}
