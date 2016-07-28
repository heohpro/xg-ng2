import { RouterConfig } from '@angular/router';
import { Demo1Route1Component} from './Route1/demo1-route1.component';
import { Demo1Route2Component} from './Route2/demo1-route2.component';

export const Demo1Routes: RouterConfig = [
    {
        path: '',
        component: Demo1Route1Component
    },{
        path: 'route2',
        component: Demo1Route2Component
    }
]