import { Injectable } from '@angular/core';

const key = 'authToken'

@Injectable({providedIn: 'root'})
export class TokenService {

    hasToken(){
        //!!->"macete" js em que transformo uma string em um boleano;
        //Nesse caso, se existir um token vai ser retornado um valor e primeiro vai ser jogado para falso e depois, segundo exclamação, transforma em verdadeiro e vice-verça 
        return !!this.getToken();
    }
    
    getToken(){
        return window.localStorage.getItem(key);
    }

    setToken(token){
        window.localStorage.setItem(key, token);
    }

    deleteToken(){
        window.localStorage.removeItem(key);
    }
}