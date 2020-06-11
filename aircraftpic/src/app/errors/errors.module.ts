import { NgModule, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found/not-found.component';
import { GlobalHandleErros } from './global-handle-errors/global-handle-erros';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NotFoundComponent],
  providers: [{
    provide: ErrorHandler,
    useClass: GlobalHandleErros
  }]
})
export class ErrorsModule { }
