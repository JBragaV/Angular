import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../photo/photo.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

  photos: any[] = [];

  constructor(
    private http: PhotoService,
    private activedRouter: ActivatedRoute
    ) {}

  ngOnInit(): void {
    const userName = this.activedRouter.snapshot.params.userName;
    this.http.listarTodosUser(userName)
      .subscribe(photos => this.photos = photos)
  }

}
