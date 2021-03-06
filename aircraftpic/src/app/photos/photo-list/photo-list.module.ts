import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PhotoListComponent } from './photo-list.component';
import { FilterByDescription } from './filter-by-descripsion.pipe';
import { LoadButtonComponent } from './load-button/load-button.component';
import { PhotosComponent } from './photos/photos.component';
import { PhotoModule } from '../photo/photo.module';
import { CardModule } from 'src/app/shared/components/card/card.module';
import { SearchComponent } from './search/search.component';
import { DarkenOnHoverModule } from 'src/app/shared/directive/darken-on-hover/darken-on-hover.module';


@NgModule({
    declarations: [
        PhotoListComponent, 
        FilterByDescription, 
        LoadButtonComponent,
        PhotosComponent,
        SearchComponent
    ],
    imports: [
        CommonModule,
        PhotoModule,
        CardModule,
        DarkenOnHoverModule,
        RouterModule
    ]
})

export class PhotolistModule {}