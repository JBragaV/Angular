import { Directive, ElementRef, OnInit, Renderer } from '@angular/core';
import { UserService } from 'src/app/core/user/user.service';

@Directive({
    selector: '[showiflogged]'
})
export class ShowIfLoggedDirective implements OnInit {

    currentDisplay: string;

    constructor(
        private element:ElementRef, 
        private userService: UserService, 
        private render: Renderer
        ){}

    ngOnInit(){

        this.currentDisplay = getComputedStyle(this.element.nativeElement).display;
        this.userService.getUser()
            .subscribe(user => {
                if(user){
                    this.render.setElementStyle(this.element.nativeElement, 'display', this.currentDisplay)
                }else{
                    this.currentDisplay = getComputedStyle(this.element.nativeElement).display;
                    this.render.setElementStyle(this.element.nativeElement, 'display', 'none')
                }
            })
    }
}