import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';

import { SignInComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { LoginAuth } from '../core/auth/login.guard';

const rotas = [
    {path: '', 
        component: HomeComponent, 
        canActivate: [LoginAuth],
        children: [
            {path: '', component: SignInComponent, data: {title: 'Login'}},
            {path: 'cadastrar', component: SignupComponent, data: {title: 'Cadastro'}},
        ]
    }    
];

@NgModule({
    imports: [RouterModule.forChild(rotas)],
    exports: [RouterModule]
})
export class HomeRoutingModule {}