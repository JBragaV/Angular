import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({providedIn: "root"})

export class PlatformDectectionService {

    //A diretiva Inject, informa ao angular que ele deve considerar um valor externo e injetar na variavel que esta sendo alvo de injeção de dependência
    constructor(@Inject(PLATFORM_ID) private platformId: string) {}

    isBrowser(): boolean{
        return isPlatformBrowser(this.platformId);
        //Serviço que detecta se função vai ser exeutada no client side
    }
}