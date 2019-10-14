import {Injectable} from '@angular/core';
import {User} from '../model/user';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = 'http://localhost:8080/users/';

  readonly users: User[] = [
    {id: 1, username: 'admin', password: '1234', email: 'admin@gmail.com', role: 'ADMIN'},
    {id: 2, username: 'admin2', password: '1234', email: 'admin2@gmail.com', role: 'ADMIN'},
    {id: 3, username: 'user', password: '1234', email: 'user@gmail.com', role: 'USER'},
    {id: 4, username: 'user2', password: '1234', email: 'user3@gmail.com', role: 'USER'}
  ];

  constructor(private http: HttpClient) {
  }

  add(user: User): void {
    if (user === null || user === undefined) {
      throw Error('add user - element is not correct');
    }
    this.users.push(user);
  }

  public getAll(): Observable<User[]> {
    const headers = this.getHeaders();
    return this.http.get<User[]>(this.baseUrl, headers);
  }

  public delete(id: number): Observable<{}> {
    const heaeders = this.getHeaders();
    const url = this.baseUrl + id;
    return this.http.delete(url, heaeders);
  }

  public changeRole(id: number): Observable<{}> {
    const headers = this.getHeaders();
    const url = this.baseUrl + 'role/' + id;
    return this.http.get(url, headers);
  }

  private getHeaders(): object {
    const token = 'Bearer '.concat(sessionStorage.getItem('token'));
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: token
      })
    };
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // client side error
      console.error('An Error occured:', error.error.message);
    } else {
      // backend retuned an unsuccesfull response code
      // the response body may contain clue as to what went wrong
      console.error(
        `Backend retunred code ${error.status}, body was: ${error.error}`
      );
    }
    // return an observable with user-facing error message
    return throwError(
      'Something bad happened; please try again later'
    );
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
  }

  /*
  delete(id: number): void {
    const foundElement = this.getOne(id);
    const idx = this.users.indexOf(foundElement);
    this.users.splice(idx, 1);
  }*/

}
