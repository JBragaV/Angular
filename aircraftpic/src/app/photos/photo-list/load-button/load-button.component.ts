import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'apj-load-button',
  templateUrl: './load-button.component.html',
  styleUrls: ['./load-button.component.css']
})
export class LoadButtonComponent implements OnInit {

  @Input() hasMore: boolean;
  constructor() { }

  ngOnInit() {
  }

}
