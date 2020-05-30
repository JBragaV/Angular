import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenService } from '../token/token.service';
import { Injectable } from '@angular/core';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {
    
    constructor(private tokenService: TokenService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        
        if(this.tokenService.hasToken()){
            req = req.clone({
                setHeaders: {
                    'x-access-token': this.tokenService.getToken()
                }
            })
        }
        return next.handle(req);
    }
}