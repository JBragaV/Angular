import { NgModule } from '@angular/core';
import { Routes, RouterModule, } from "@angular/router";

import { PhotoListComponent } from './photos/photo-list/photo-list.component';
import { PhotoFormComponent } from './photos/photo-form/photo-form.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { PhotoListResolve } from './photos/photo-list.resolve';
import {} from './home/home.module' 
import { AuthGuard } from './core/auth/auth.guard';
import { PhotosDetailsComponent } from './photos/photos-details/photos-details.component';

const rotas:Routes = [

    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home',
    },
    {
        path: 'home', 
        loadChildren: './home/home.module#HomeModule'
    },
    {
        path: 'lista/:userName',
        component: PhotoListComponent,
        resolve: {
          photo: PhotoListResolve
        },
        data: {
            title: 'Suas Fotos'
        }
    }, 
    {
        path: 'p/add', 
        component: PhotoFormComponent,
        canActivate: [AuthGuard],
        data: {
            title: 'Upload'
        }
        
    },
    {
        path: 'p/:photoId', 
        component: PhotosDetailsComponent,
        data: {
            title: 'Detalhes'
        }
        //canActivate: [AuthGuard] 
    },
    {path: '**', component: NotFoundComponent, data: {title:'Not Found'}}
]

@NgModule({
    imports: [ RouterModule.forRoot(rotas) ],
    exports: [ RouterModule ],
})

export class AppRoutingModule {

}