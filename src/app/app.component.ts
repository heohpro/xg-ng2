import { Component } from '@angular/core';
import { Routes, Router, ROUTER_DIRECTIVES} from '@angular/router';
import { Demo1Component } from './Modules/Demo1/demo1.component'
import { Header } from './Public/app.header.ts';
import { Navbar} from './Public/app.navbar.ts';

import { HighlightDirective } from './Directive/highlight.directive';
import { DefaultContentFilter } from './Filter/defaultContent.filter';


@Component({
    selector: 'my-app',
    providers: [],
    directives: [ROUTER_DIRECTIVES, Header, Navbar, HighlightDirective],
    pipes: [ DefaultContentFilter ],
    template: require('./app.component.html')
})

@Routes([
    {
        path: '/',
        component: Demo1Component,
    },
    {
        path: '/about',
        component: Demo1Component
    }
])

export class AppComponent {
    constructor(
        private _router:Router
    ) {
        //this._router.navigate(['/about']);
    }
}
