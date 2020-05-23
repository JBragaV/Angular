import { Component, OnInit, OnDestroy, Output, EventEmitter, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators'

@Component({
    selector: 'apj-search',
    templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit, OnDestroy {
    
    @Input() valor = '';
    debounce: Subject<string> = new Subject<string>();
    @Output() buscando = new EventEmitter<string>(); 
    ngOnInit(): void {
        this.debounce
            .pipe(debounceTime(300))
            .subscribe(filter => this.buscando.emit(filter))
    }

    ngOnDestroy(): void {
        this.debounce.unsubscribe();
    }
}