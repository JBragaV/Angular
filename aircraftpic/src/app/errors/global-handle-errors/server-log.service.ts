import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServerLog } from './server-log';

const API = 'http://localhost:7000'
@Injectable({providedIn: 'root'})
export class ServiceLog {
    constructor(private http: HttpClient){}

    log(logErro: ServerLog){
        console.log(logErro);
        console.log("Cheguei na função de envio de log para o servidor!!");
        return this.http.post(`${API}/infra/log`, logErro);
    }
}