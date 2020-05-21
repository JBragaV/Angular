import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Photo } from '../../photo/photo';

@Component({
  selector: 'apj-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnChanges {

  @Input() photos: Photo[] = [];

  Rows: any[] = []

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    if(changes.photos)
    this.Rows = this.criandoRows(this.photos);
  }


  criandoRows(photos: Photo[]):Photo[]{
    const newRow = [];
    for(let index = 0; index < photos.length; index += 3){
      newRow.push(photos.slice(index, index+3))
    }
    return newRow
  }
}
