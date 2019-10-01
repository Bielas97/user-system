import {Injectable} from '@angular/core';
import {User} from '../model/user';
import {Role} from '../model/role';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = 'http://localhost:8080/users';

  readonly users: User[] = [
    {id: 1, username: 'admin', password: '1234', email: 'admin@gmail.com', role: 'ADMIN', photo: '/assets/img/admin.png'},
    {id: 2, username: 'admin2', password: '1234', email: 'admin2@gmail.com', role: 'ADMIN', photo: '/assets/img/admin.png'},
    {id: 3, username: 'user', password: '1234', email: 'user@gmail.com', role: 'USER', photo: '/assets/img/user.png'},
    {id: 4, username: 'user2', password: '1234', email: 'user3@gmail.com', role: 'USER', photo: '/assets/img/user.png'}
  ];

  constructor(private http: HttpClient) {
  }

  add(user: User): void {
    if (user === null || user === undefined) {
      throw Error('add user - element is not correct');
    }
    this.users.push(user);
  }

  getAll(): Observable<User[]> {
    const token = 'Bearer '.concat(sessionStorage.getItem('token'));
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: token
      })
    };
    /*let users: User[] = null;*/
    return this.http.get<User[]>(this.baseUrl, httpOptions);
      /*.subscribe(response => {
        console.log(response);
      }, error => {
        console.log(error);
      }, () => {
        console.log('GET request completed');
      });*/
  }

  getOne(id: number): User {
    const foundElement = this.users.filter(u => u.id === id);
    if (foundElement === null || foundElement === undefined) {
      throw Error(`cannot find element with id ${id}`);
    }
    return foundElement[0];
  }

  update(id: number, user: User): void {
    const userFromArray = this.getOne(id);
    if (userFromArray === null || userFromArray === undefined) {
      throw Error(`no user with id ${id}`);
    }
    userFromArray.username = user.username || userFromArray.username;
    userFromArray.role = user.role || userFromArray.role;
    userFromArray.email = user.email || userFromArray.email;
    userFromArray.password = user.password || userFromArray.password;
    userFromArray.photo = user.photo || userFromArray.photo;
  }

  delete(id: number): void {
    const foundElement = this.getOne(id);
    const idx = this.users.indexOf(foundElement);
    this.users.splice(idx, 1);
  }

}
