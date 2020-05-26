import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const api_base = 'http://localhost:3000'
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  autenticador(userName: string, password: string){
    return this.http.post(`${api_base}/user/login`, {userName, password})
  }
}
