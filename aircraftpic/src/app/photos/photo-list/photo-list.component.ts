import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { debounceTime } from "rxjs/operators";

import { Photo } from '../photo/photo';
import { PhotoService } from '../photo/photo.service';
import { LoadingService } from 'src/app/shared/components/loading/loading.service';

@Component({
  selector: 'apj-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

  photos: Photo[] = [];
  filtro = '';
  pagina: number = 1;
  userName: string = '';
  hasMore: boolean = true;

  constructor(
      private activedRouter: ActivatedRoute, 
      private service: PhotoService) {}

  ngOnInit(): void {
    this.activedRouter.params.subscribe(params => {
      this.userName = params.userName;
      this.photos = this.activedRouter.snapshot.data.photo;
    });
    
  }

  paginacao(){
    this.userName = this.activedRouter.snapshot.params.userName; 
    this.service
      .listarPorPaginas(this.userName, ++this.pagina)
      .subscribe(photos => {
        this.filtro = '';
        this.photos = this.photos.concat(...photos);
        if(!photos.length || photos.length % 3 != 0) this.hasMore = false;
      });
  }

}
