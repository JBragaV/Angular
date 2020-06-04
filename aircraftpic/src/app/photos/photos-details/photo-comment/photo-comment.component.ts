import { Component, Input, OnInit } from '@angular/core';
import { PhotoService } from '../../photo/photo.service';
import { Observable } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';

import { PhotoComment } from '../../photo-comment';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'apj-photo-comment',
    templateUrl: 'photo-comment.component.html'
})
export class PhotoCommentComponent implements OnInit{

    commentForm: FormGroup
    @Input() photoId: number;
    comments$: Observable<PhotoComment[]>;

    constructor(
        private formBuilder: FormBuilder, 
        private photoService: PhotoService
    ) {}

    ngOnInit(): void {
        this.comments$ = this.photoService.getComment(this.photoId);

        this.commentForm = this.formBuilder.group({
            comment: ['', [Validators.maxLength(300), Validators.required]]
        })
    }

    add(){
        console.log("Chamei essa função!!!")
        const comment = this.commentForm.get('comment').value as string;
        //com essa sintaxe, se eu não atribuir o valor em uma variavel, a função não se "completa".
        this.comments$ = this.photoService
            .addComment(this.photoId, comment)
            .pipe(switchMap(() => this.photoService.getComment(this.photoId)))
            .pipe(tap(() => this.commentForm.reset()))
    }
}