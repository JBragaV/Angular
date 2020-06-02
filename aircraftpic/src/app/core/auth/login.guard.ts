import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { UserService } from '../user/user.service';

@Injectable({providedIn: 'root'})
export class LoginAuth implements CanActivate{

    constructor(private userService: UserService, private route: Router) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        if(this.userService.logged()){
            this.route.navigate(['lista', this.userService.getuserName()]);
            return false;
        }
        return true;
    }


}