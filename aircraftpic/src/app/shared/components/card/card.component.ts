import { Component, Input } from '@angular/core';

@Component({
    selector: 'apj-card',
    templateUrl: 'card.component.html'
})
export class CardComponent {

    @Input() titulo: string;
    
}