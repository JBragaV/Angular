import { ElementRef, OnInit, Directive } from '@angular/core';
import { PlatformDectectionService } from 'src/app/core/plataform-detector/platform-dectection.service';

@Directive({
    selector: '[immediateClick]'
})
export class ImmediateClickDirective implements OnInit{

    constructor(
        private elemento: ElementRef, 
        private platformDetector: PlatformDectectionService
        ) {}

    ngOnInit(): void {
        this.platformDetector.isBrowser() && this.elemento.nativeElement.click();
    }
}