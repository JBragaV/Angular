import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { PhotoFormComponent } from './photo-form.component';
import { VMessageModule } from 'src/app/shared/components/vmessage/vmessage.module';
import { PhotoModule } from '../photo/photo.module';
import { RouterModule } from '@angular/router';
import { ImmediateClickModule } from 'src/app/shared/directive/immediate-click/immediate-click.module';

@NgModule({
    declarations: [PhotoFormComponent],
    imports: [
        CommonModule, 
        ReactiveFormsModule, 
        VMessageModule, 
        PhotoModule, 
        RouterModule,
        ImmediateClickModule
    ]
})
export class PhotoFormModule {}