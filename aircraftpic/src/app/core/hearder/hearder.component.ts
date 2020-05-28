import { Component, Input } from '@angular/core';

import { UserService } from '../user/user.service';
import { Observable } from 'rxjs';
import { User } from '../user/user';

@Component({
    selector: 'apj-header',
    templateUrl: './hearder.component.html'
})
export class HeaderComponent {
    @Input() titulo: string;
    user: User

    constructor(private userService: UserService) {
        this.userService.getUser().subscribe(user => this.user = user);
    }
}