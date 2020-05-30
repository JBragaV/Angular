import { NgModule } from '@angular/core';
import { Routes, RouterModule, } from "@angular/router";

import { PhotoListComponent } from './photos/photo-list/photo-list.component';
import { PhotoFormComponent } from './photos/photo-form/photo-form.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { PhotoListResolve } from './photos/photo-list.resolve';
import { SignInComponent } from './home/signin/signin.component';
import { AuthGuard } from './core/auth/auth.guard';
import { SignupComponent } from './home/signup/signup.component';

const rotas:Routes = [

    {path: '', component: SignInComponent, canActivate: [AuthGuard]},
    {path: 'cadastrar', component: SignupComponent},
    {path: 'lista/:userName',
     component: PhotoListComponent,
      resolve: {
          photo: PhotoListResolve
        }
    }, 
    {path: 'p/add', component: PhotoFormComponent},
    {path: '**', component: NotFoundComponent}
]

@NgModule({
    imports: [ RouterModule.forRoot(rotas) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule {

}