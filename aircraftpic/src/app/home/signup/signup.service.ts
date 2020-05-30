import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NewUser } from './new-user';

const api_base = 'http://localhost:3000' 

@Injectable({providedIn: 'root'})
export class SignupService {

    constructor(private http: HttpClient) {}

    checkUserName(userName: string){
        return this.http.get(`${api_base}/user/exists/${userName}`);
    }

    signup(newUser: NewUser){
        return this.http.post(`${api_base}/user/signup`, newUser);
    }
}