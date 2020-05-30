import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';


import { UserNotTakenValidatorService } from './user-not-taken.validator.service';
import { lowCaseValidator } from 'src/app/shared/validators/low-case.validator';
import { NewUser } from './new-user';
import { SignupService } from './signup.service';

@Component({
    templateUrl: './signup.component.html'
})
export class SignupComponent implements OnInit{

    signupForm:FormGroup;

    constructor(
        private formBuilder: FormBuilder,
        private userNotTakenValidatorService: UserNotTakenValidatorService,
        private signupService: SignupService,
        private router: Router
        ) {}
    
    ngOnInit(){
        this.signupForm = this.formBuilder.group({
           email: [
               '',
               [
                   Validators.required,
                   Validators.email
                ],
            ], 
           fullName: [
               '',
               [
                   Validators.required,
                   Validators.maxLength(40),
                   Validators.minLength(2)
                ]
            ], 
           userName: [
               '', 
               [
                   Validators.required,
                   Validators.maxLength(30),
                   Validators.minLength(2),
                   lowCaseValidator
                ],
                this.userNotTakenValidatorService.usuarioExiste()
            ], 
           password: [
               '', 
               [
                   Validators.required,
                   Validators.minLength(6),
                   Validators.maxLength(30)
                ]
            ], 
        })
    }


    submit(){
        const newUser = this.signupForm.getRawValue() as NewUser
        this.signupService.signup(newUser)
            .subscribe(()=> this.router.navigate(['']),
                        error => console.log(error)
            )
    }


}