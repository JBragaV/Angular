import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import * as jwt_decode from 'jwt-decode';

import { TokenService } from '../token/token.service';
import { User } from './user';

@Injectable({providedIn: 'root'})
export class UserService {

    userSubject = new BehaviorSubject<User>(null);
    userName: string;
    
    constructor(private tokenService: TokenService) {
        this.tokenService.hasToken() && this.decodeToken();
    }

    setToken(token){
        this.tokenService.setToken(token);
        this.decodeToken();
    }

    getUser(){
        return this.userSubject.asObservable();
    }

    private decodeToken(){
        const token = this.tokenService.getToken();
        const user = jwt_decode(token) as User;
        this.userName = user.name;
        this.userSubject.next(user);
    }

    getuserName(){
        return this.userName;
    }

    logged(){
        return this.tokenService.hasToken();
    }

    logOut(){
        this.tokenService.deleteToken();
        this.userSubject.next(null);
    }
}