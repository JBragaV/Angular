import { Directive, ElementRef, Renderer, HostListener } from '@angular/core';

@Directive({
    selector: '[darken]'
})

export class DarkenOnHover {

    valor = "70%";
    constructor(
        private el: ElementRef<any>,
        private render: Renderer
    ) {}

    @HostListener('mouseover')
    darkon(){
        this.render
            .setElementStyle(this.el.nativeElement, 'filter', `brightness(${this.valor})`);
    }

    @HostListener('mouseleave')
    darkoff(){
        this.render
            .setElementStyle(this.el.nativeElement, 'filter', `brightness(100%)`)
    }

}