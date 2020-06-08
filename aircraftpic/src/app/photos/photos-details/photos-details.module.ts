import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { PhotosDetailsComponent } from './photos-details.component';
import { PhotoModule } from '../photo/photo.module';
import { PhotoCommentComponent } from './photo-comment/photo-comment.component';
import { VMessageModule } from 'src/app/shared/components/vmessage/vmessage.module';
import { PhotoOwnerDirective } from './photo-owner/photo-owner.directive';
import { ShowIfLoggedModule } from 'src/app/shared/directive/show-if-logged/show-if-logged.module';

@NgModule({
    declarations: [ 
        PhotosDetailsComponent, 
        PhotoCommentComponent,
        PhotoOwnerDirective
    ],
    exports: [
        PhotosDetailsComponent, 
        PhotoCommentComponent
    ],
    imports: [
        CommonModule, 
        PhotoModule, 
        RouterModule, 
        ReactiveFormsModule, 
        VMessageModule,
        ShowIfLoggedModule
    ]
})
export class PhotosDetailsModule {}