import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
//import { ROUTER_PROVIDERS } from '@angular/router';
import ROUTER_PROVIDER from './app/Router/app.routes.ts';
import { HTTP_PROVIDERS} from '@angular/http';
import { AppComponent } from './app/app.component';
//require('./common/css/style.css');
//require('./common/css/base/simple-line-icons.css');

import './common/css/style.js';


if (process.env.ENV === 'production') {
    enableProdMode();
}
bootstrap(AppComponent, [ HTTP_PROVIDERS, ROUTER_PROVIDER])
    .catch(err => console.error(err));

