import { Component, Input } from '@angular/core';

@Component({
    selector: 'apj-vmessage',
    templateUrl: 'vmessage.component.html'
})
export class VMessageComponent {
    @Input() mensagem: string;

    constructor() {}
}