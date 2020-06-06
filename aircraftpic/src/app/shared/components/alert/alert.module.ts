import { NgModule } from '@angular/core';
import { MyAlertComponent } from './alert.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [MyAlertComponent],
    exports: [MyAlertComponent],
    imports: [CommonModule]
})
export class AlertModule{}