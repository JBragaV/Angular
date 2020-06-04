import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

import { Photo } from '../photo/photo';
import { PhotoService } from '../photo/photo.service';

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
        private router: Router) {}


    ngOnInit(): void {
        this.photoId = this.route.snapshot.params.photoId
        this.photo$ = this.photoService.selectById(this.photoId);
    }

    remove(){
        this.photoService.remove(this.photoId)
            .subscribe(()=>this.router.navigate(['']));
    }
    
}