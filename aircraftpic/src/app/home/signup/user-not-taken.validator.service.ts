import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { debounceTime, switchMap, map, first } from 'rxjs/operators';

import { SignupService } from './signup.service';

@Injectable({providedIn: 'root'})
export class UserNotTakenValidatorService {

    constructor(private signupService: SignupService){}

    usuarioExiste(){
        return (control: AbstractControl) => {
            return control.valueChanges.pipe(
                    debounceTime(500)
                ).pipe(
                    switchMap(userName =>
                        this.signupService.checkUserName(userName)
                )).pipe(
                    map(existe => existe ? { userName: true } : null)
                ).pipe(
                    first()
                );
    }
    }
}