import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginService } from '../service/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  forma = new FormGroup({
    username: new FormControl(),
    password: new FormControl()
  });
  loginFailed = false;

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }

  submit() {
    this.loginService.login(this.forma.value).subscribe(r => {
      console.log(r);
    }, (err) => {
      this.loginFailed = true;
    });
  }

}
