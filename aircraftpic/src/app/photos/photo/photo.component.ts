import { Component, Input } from "@angular/core";

@Component({
    selector: 'apj-photo',
    templateUrl: './photo.component.html'
})

export class PhotoComponent {
    
    @Input() url = '';
    @Input() descricao = '';
    @Input() legenda = '';
}