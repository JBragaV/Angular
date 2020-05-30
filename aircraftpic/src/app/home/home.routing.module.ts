import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { AuthGuard } from '../core/auth/auth.guard';
import { SignInComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';

const rotas = [
    {path: '', 
        component: HomeComponent, 
        canActivate: [AuthGuard],
        children: [
            {path: '', component: SignInComponent},
            {path: 'cadastrar', component: SignupComponent},
        ]
    }    
];

@NgModule({
    imports: [RouterModule.forChild(rotas)],
    exports: [RouterModule]
})
export class HomeRoutingModule {}