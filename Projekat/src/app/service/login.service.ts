import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  token = null;
  user = null;

  constructor(private httpClient : HttpClient) { }

  login(user) {
    return this.httpClient.post<any>("http://localhost:3000/login", user).pipe(
      tap(r => {
        this.token = r["token"];
        this.user = JSON.parse(atob(r["token"].split(".")[1]));
      })
    )
  }

  validateRoles(roles) {
    if(this.user) {
      let userRoles = new Set(this.user.roles);
      for(let r of roles) {
        if(userRoles.has(r)) {
          return true;
        }
      }
    }

    return false;
  }
}
