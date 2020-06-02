import { Component, Input } from "@angular/core";

const CLOUD = 'http://localhost:3000/imgs/';

@Component({
    selector: 'apj-photo',
    templateUrl: './photo.component.html'
})

export class PhotoComponent {
    @Input() descricao = '';
    @Input() legenda = '';


    private _url = ''; 

    @Input() set url(url: string) {
        if(!url.startsWith('data')){
            this._url = `${CLOUD}${url}`
        }else{
            this._url = url;
        }

    }

    get url() {
        return this._url;
    }
}