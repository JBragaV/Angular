import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Photo } from './photo/photo';
import { PhotoService } from './photo/photo.service';

@Injectable({providedIn: 'root'})
export class PhotoListResolve implements Resolve<Observable<Photo[]>> {
    
    constructor(private service: PhotoService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const  userName = route.params.userName;

        return this.service.listarPorPaginas(userName, 1);
    }


}