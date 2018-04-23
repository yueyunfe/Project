import {Component, OnInit, ViewChild} from '@angular/core';
import * as fire from 'firebase';
import {AngularFireAuth} from 'angularfire2/auth';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  errorFlag: boolean;
  errorMsg = 'Invalid username or password!';
  @ViewChild('f') loginForm: NgForm;
  username: string;
  password: string;

  constructor(private auth: AuthService, private router: Router) {
  }

  ngOnInit() {
  }

  //google log in
  login() {
    this.auth.googleLogin();
  }

  regularLogin() {
    this.username = this.loginForm.value.username;
    this.password = this.loginForm.value.password;
    this.errorFlag = false;

    this.auth.regularLogin(this.username, this.password);
  }

  register() {
    this.router.navigate(['/register']);
  }


}
