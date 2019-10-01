import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AuthenticationResponse} from '../model/authentication-response';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {
  }

  login(name: string, passwd: string): Observable<AuthenticationResponse> {
    const url = this.baseUrl.concat('/login');
    const user = {
      username: name,
      password: passwd
    };
    return this.http.post<AuthenticationResponse>(url, user);
  }

  isLoggedIn(): boolean {
    return sessionStorage.getItem('token') !== null;
  }

  logout(): void {
    sessionStorage.clear();
  }


}
