import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {AuthService} from '../../service/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private loading = false;

  loginForm: FormGroup;

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl(''),
      password: new FormControl('')
    });
  }

  onSubmit(): void {
    this.loading = true;
    if (this.loginForm.value.username && this.loginForm.value.password) {
      const user = {
        username: this.loginForm.value.username,
        password: this.loginForm.value.password
      };

      this.authService.login(user.username, user.password)
        .subscribe(response => {
          sessionStorage.setItem('token', response.token);
          sessionStorage.setItem('role', response.role);
        }, error => {
          this.loading = false;
          console.log(error);
        }, () => {
          this.loading = false;
          this.router.navigate(['/users']);
          console.log('Post completed without errors');
        });
    }
  }

}
