import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Photo } from '../photo/photo';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

  photos: Photo[] = [];
  filtro = '';

  constructor(private activedRouter: ActivatedRoute) {}

  ngOnInit(): void {
    this.photos = this.activedRouter.snapshot.data.photo;
  }

}
