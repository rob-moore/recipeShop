import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: 'header.component.html'
})

export class HeaderComponent implements OnInit {
    @Output() selection = new EventEmitter<string>();

    constructor() { }

    ngOnInit() { }

    onSelect(type: string) {
      this.selection.emit(type);
    }
}
