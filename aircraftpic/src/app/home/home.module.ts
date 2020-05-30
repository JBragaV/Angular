import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SignInComponent } from './signin/signin.component';
import { VMessageModule } from '../shared/components/vmessage/vmessage.module';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing.module';
import { SignupService } from './signup/signup.service';
import { UserNotTakenValidatorService } from './signup/user-not-taken.validator.service';

@NgModule({
    declarations: [SignInComponent, SignupComponent, HomeComponent],
    imports: [
        CommonModule, 
        ReactiveFormsModule, 
        VMessageModule,
        RouterModule, 
        HomeRoutingModule
    ],
    providers: [
        SignupService
    ]
})
export class HomeModule {}