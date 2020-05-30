import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SignInComponent } from './signin/signin.component';
import { VMessageModule } from '../shared/components/vmessage/vmessage.module';
import { SignupComponent } from './signup/signup.component';

@NgModule({
    declarations: [SignInComponent, SignupComponent],
    imports: [
        CommonModule, 
        ReactiveFormsModule, 
        VMessageModule,
        RouterModule
    ]
})
export class HomeModule {}