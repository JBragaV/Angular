import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

import { PhotoModule } from './photo/photo.module';
import { PhotoFormModule } from './photo-form/photo-form.module';
import { PhotolistModule } from './photo-list/photo-list.module';
import { PhotosDetailsModule } from './photos-details/photos-details.module';


@NgModule({
    declarations:[],
    imports: [  
        CommonModule,
        PhotoModule,
        PhotoFormModule,
        PhotolistModule,
        PhotosDetailsModule
    ]
})


export class PhotosModule {}