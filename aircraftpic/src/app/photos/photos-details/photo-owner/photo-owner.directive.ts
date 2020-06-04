import { Directive, Input, ElementRef, Renderer, OnInit } from '@angular/core';
import { Photo } from '../../photo/photo';
import { UserService } from 'src/app/core/user/user.service';

@Directive({
    selector: '[photo-owner]'
})
export class PhotoOwnerDirective implements OnInit {

    @Input() photo: Photo;

    constructor(
        private element: ElementRef, 
        private render: Renderer,
        private userService: UserService
        ){}

    ngOnInit(): void {
        this.userService.getUser()
            .subscribe(user => {
                if(!user || user.id !== this.photo.userId){
                    this.render.setElementStyle(this.element.nativeElement,'display', 'none');
                }
            })
    }



}