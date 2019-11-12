import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginDTO } from '../shared/models/loginDTO.model';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });

  constructor(private snack: MatSnackBar, private router: Router, private service: AuthService) {}

  ngOnInit() {}

  login() {
    const dto: LoginDTO = this.loginForm.value;

    this.service.login(dto).subscribe(token => {
      localStorage.setItem('access-token', token.access_token);
      localStorage.setItem('refresh-token', token.refresh_token);
      this.openSnack('Welcome, ' + dto.username + ', here is your data');
      this.router.navigate(['']);
    }, error => {
      this.openSnack('Wrong username or password')
    });
  }

  openSnack(msg: string) {
    this.snack.open(msg, 'Ok', { duration: 3000 });
  }
}
