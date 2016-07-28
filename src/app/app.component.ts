import { Component } from '@angular/core';
import { Router, ROUTER_DIRECTIVES} from '@angular/router';
import { Header } from './Public/app.header.ts';
import { Navbar} from './Public/app.navbar.ts';

import ROUTER_PROVIDER from './Router/app.routes.ts';

@Component({
    selector: 'my-app',
    directives: [ROUTER_DIRECTIVES, Header, Navbar],
    template: require('./app.component.html')
})

export class AppComponent {
    constructor(
        private _router:Router
    ) {
    }
}
