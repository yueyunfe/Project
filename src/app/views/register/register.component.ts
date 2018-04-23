import {Component, OnInit, ViewChild} from '@angular/core';
import {AppUser} from '../../model/app-user';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import {UserService} from '../../services/user.service';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @ViewChild('f') registerForm: NgForm;
  error: string;
  user: AppUser;

  constructor(private userService: UserService, private router: Router, private auth: AuthService) {
  }

  ngOnInit() {
  }

  register() {
    const username = this.registerForm.value.username;
    const password = this.registerForm.value.password;
    const displayname = this.registerForm.value.displayname;
    const verify = this.registerForm.value.verify;

    if (username.includes('@') && username.includes('.com') && username.length >= 6) {
      if (password.length >= 6) {
        if (password === verify) {
          this.auth.emailSignUp(username, password, displayname);
          this.router.navigate(['/login']);
        } else {
          this.error = 'Password mis-matching!';
        }
      } else {
        this.error = 'Password too short';
      }
    } else {
      this.error = 'email format wrong';
    }


  }


}
