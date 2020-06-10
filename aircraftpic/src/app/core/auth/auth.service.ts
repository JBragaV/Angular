import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

import { UserService } from '../user/user.service';
import { environment } from '../../../environments/environment';

const api_base = environment.urlBase;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
      private http: HttpClient, 
      private userService: UserService
      ) { }

  autenticador(userName: string, password: string){
    return this.http
    //tap me faz conseguir acessar o header da resposta vinda do back-end, apos ter configurado no post, observe: "response"
      .post(`${api_base}user/login`, {userName, password}, {observe: "response"})
      .pipe(tap(res => {
        this.userService.setToken(res.headers.get('x-access-token'));
      }))
  }
}
