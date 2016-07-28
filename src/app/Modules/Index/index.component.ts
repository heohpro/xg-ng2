import { Component } from '@angular/core';
import { HighlightDirective } from '../../Directive/highlight.directive';
import { DefaultContentFilter } from '../../Filter/defaultContent.filter';


@Component({
    selector: 'test',
    template: require('./index.component.html'),
    directives: [HighlightDirective],
    pipes: [ DefaultContentFilter ]
})

export class IndexComponent {
    constructor() {}
}
