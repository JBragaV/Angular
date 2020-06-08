import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

import { Photo } from '../photo/photo';
import { PhotoService } from '../photo/photo.service';
import { AlertService } from 'src/app/shared/components/alert/alert.service';
import { UserService } from 'src/app/core/user/user.service';

@Component({
    templateUrl: 'photos-details.component.html',
    styleUrls: ['photos-details.component.css']
})

export class PhotosDetailsComponent implements OnInit{

    photoId: number;
    photo$: Observable<Photo>
    constructor(
        private route: ActivatedRoute,
        private photoService: PhotoService,
        private router: Router,
        private alertService: AlertService,
        private user: UserService) {}


    ngOnInit(): void {
        this.photoId = this.route.snapshot.params.photoId
        this.photo$ = this.photoService.selectById(this.photoId);
        this.photo$.subscribe(()=>{}, erro =>{
            this.router.navigate(['/image-not-found']);
        })
    }

    remove(){
        this.photoService.remove(this.photoId)
            .subscribe(()=>{
                this.alertService.success('Foto Removida como sucesso!!!')
                this.router.navigate(['/lista', this.user.getuserName()]);
            },
            erro => {
                console.log(erro);
                this.alertService.danger("Erro ao deletar a foto, Tente novamente!!!");
            });
    }

    like(photo: Photo){
        this.photoService.like(photo.id)
            .subscribe(liked => {
                if(liked){
                    this.photo$ = this.photoService.selectById(photo.id);
                }
            })
    }
    
}