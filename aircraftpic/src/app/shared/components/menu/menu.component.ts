import { Component } from '@angular/core';

@Component({
    selector: "apj-menu",
    templateUrl: "./menu.component.html",
    styleUrls: ['./menu.component.css']
})
export class MenuComponent {

    isShow = false;

    toggle(){
        this.isShow = !this.isShow;
    }
}