import { Component, OnInit } from '@angular/core';
import { UserService } from '../Service/userServices.ts'
import { Router, ROUTER_DIRECTIVES} from '@angular/router';


@Component({
    selector: 'navbar',
    template: require('./app.navbar.html'),
    providers: [UserService],
    directives: [ROUTER_DIRECTIVES]
})
export class Navbar implements OnInit{

    constructor ( private userService: UserService ) {}

    private menu: any;
    ngOnInit() {
        this.getMenu();
    }
    getMenu() {
        this.userService.getMenu()
            .then(
                menu => {
                    this.menu = menu;
                    console.log(menu);
                }
            )
        console.log(this.menu);
    }
}