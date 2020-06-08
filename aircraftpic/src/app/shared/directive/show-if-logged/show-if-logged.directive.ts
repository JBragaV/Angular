import { Directive, ElementRef, OnInit, Renderer } from '@angular/core';
import { UserService } from 'src/app/core/user/user.service';

@Directive({
    selector: '[showiflogged]'
})
export class ShowIfLoggedDirective implements OnInit {

    constructor(
        private element:ElementRef, 
        private userService: UserService, 
        private render: Renderer
        ){}

    ngOnInit(){
        !this.userService.logged() && this.render.setElementStyle(this.element.nativeElement, 'display', 'none');
    }
}