import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Photo } from './photo';

const urlBase = 'http://localhost:3000/';

@Injectable({providedIn : 'root'})
export class PhotoService {

    constructor(private http: HttpClient) {}


    listarTodosUser(usuario: string){
        return this.http.get<Photo[]>(`${urlBase}${usuario}/photos`);
    }

    listarPorPaginas(usuario: string, pagina: number){
        
        const params = new HttpParams().append("page", pagina.toString());
        return this.http.get<Photo[]>(`${urlBase}${usuario}/photos`,{params});
    }
}