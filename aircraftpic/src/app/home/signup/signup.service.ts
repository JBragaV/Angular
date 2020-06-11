import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { NewUser } from './new-user';
import { environment } from '../../../environments/environment';

const api_base = environment.urlBase; 

@Injectable()
export class SignupService {

    constructor(private http: HttpClient) {}

    checkUserName(userName: string){
        return this.http.get(`${api_base}user/exists/${userName}`);
    }

    signup(newUser: NewUser){
        return this.http.post(`${api_base}user/signup`, newUser);
    }
}