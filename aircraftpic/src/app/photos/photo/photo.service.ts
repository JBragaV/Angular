import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Photo } from './photo';
import { PhotoComment } from '../photo-comment';
import { map, catchError } from 'rxjs/operators';
import { of, throwError } from 'rxjs';

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


    upload(descicao: string, permitirComentario: boolean, file: File){
        const formData = new FormData();
        formData.append('description', descicao);
        formData.append('allowComments', permitirComentario ? 'true' : 'false');
        formData.append('imageFile', file);
        return this.http.post(`${urlBase}photos/upload`, formData, {
            observe: 'events',
            reportProgress: true
        });
    }

    selectById(id: number){
        return this.http.get<Photo>(`${urlBase}photos/${id}`);
    }

    getComment(id: number){
        console.log("Chamei a função getComment")
        return this.http.get<PhotoComment[]>(`${urlBase}photos/${id}/comments`);
    }

    addComment(id: number, commentText: string){
        console.log("Chamei a função addComment")
        return this.http.post(`${urlBase}photos/${id}/comments`,{commentText});
    }

    remove(id: number){
        return this.http.delete(`${urlBase}photos/${id}`);
    }

    like(id: number){
        return this.http.post(`${urlBase}photos/${id}/like`, {}, {observe: 'response'})
            .pipe(map(resp => true))
            .pipe(catchError(erro=>{
                return erro.status == '304' ? of(false) : throwError(erro);
                
            }))
    }
}