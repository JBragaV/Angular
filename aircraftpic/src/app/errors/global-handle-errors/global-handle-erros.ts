import {  ErrorHandler, Injector, Injectable } from '@angular/core';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';

import * as StackError from 'stacktrace-js';

import { UserService } from 'src/app/core/user/user.service';
import { ServiceLog } from './server-log.service';



@Injectable()
export class GlobalHandleErros implements ErrorHandler{

    constructor(private injector: Injector) {}
    handleError(error: any): void {
        
        const location = this.injector.get(LocationStrategy);
        
        const url = location instanceof PathLocationStrategy 
        ? location.path() 
        : '';
        console.log("Cheguei no Global Error!!");
        const userService = this.injector.get(UserService);
        const userName = userService.getuserName();

        const logService = this.injector.get(ServiceLog);

        const message = error.message
        ? error.message :
        error.toString();

        StackError
            .fromError(error)
            .then(stackFrame => {
                const stackAsString = stackFrame.map(sf => {
                    return sf.toString()
                }).join('\n');
                console.log("Cheguei na no then!!");
                logService.log({message, url, userName, stack: stackAsString});
            });
        
        
        
    }


}