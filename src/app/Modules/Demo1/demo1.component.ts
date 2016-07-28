import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { Demo1Route1Component} from './Route1/demo1-route1.component';
import { Demo1Route2Component} from './Route2/demo1-route2.component';


@Component({
    selector: 'demo',
    template: require('./demo1.component.html'),
    directives: [ROUTER_DIRECTIVES]
})

export class Demo1Component {
    constructor() {}
}
