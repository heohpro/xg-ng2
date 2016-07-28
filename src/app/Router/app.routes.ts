import { RouterConfig, provideRouter } from '@angular/router';
import { IndexComponent } from '../Modules/Index/index.component';
import { Demo1Component } from '../Modules/Demo1/demo1.component';
import { Demo2Component } from '../Modules/Demo2/demo2.component';

import { Demo1Route1Component} from '../Modules/Demo1/Route1/demo1-route1.component';
import { Demo1Route2Component} from '../Modules/Demo1/Route2/demo1-route2.component';

//Demo1路由
import { Demo1Routes } from '../Modules/Demo1/demo1.routes';

//子模块路由
export const routes = [
    {
        path: '',
        component: IndexComponent
    },
    {
        path: 'demo1',
        component: Demo1Component,
        children: Demo1Routes
    },{
        path: 'demo2',
        component: Demo2Component
    }
]
let  ROUTER_PROVIDER = provideRouter(routes);

export default ROUTER_PROVIDER
