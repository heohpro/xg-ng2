import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';



@Injectable()
export class UserService {

    constructor (private http: Http){}

    private userUrl = '/login';

    getUser () {
        return this.http.get(this.userUrl)
            .toPromise()
            .then(this.extractData);
    }

    private menuUrl = '/menus';

    getMenu () {
        return this.http.get(this.menuUrl)
            .toPromise()
            .then(this.extractData);
    }

    private extractData(res: Response) {
        let body = res.json();
        return body.data|| {};
    }
}