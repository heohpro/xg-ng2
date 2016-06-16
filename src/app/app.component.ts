import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES, Routes } from '@angular/router';
import { Demo1Component } from './Demo1/demo1.component'
import { Header } from './app.header';
import { Navbar} from './app.navbar';
import { Content} from './app.content';


@Component({
    selector: 'my-app',
    directives: [ROUTER_DIRECTIVES, Header, Navbar],
    template: require('./app.component.html')
})

@Routes([
    {
        path: '/',
        component: Demo1Component
    },
    {
        path: '/about',
        component: Demo1Component
    }
])

export class AppComponent { }
