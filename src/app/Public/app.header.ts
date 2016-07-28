import { Component, OnInit} from '@angular/core';
import { UserService } from '../Service/userServices.ts'
@Component({
    selector: 'header',
    template: require('./app.header.html'),
    providers: [UserService]
})
export class Header implements OnInit{

    constructor ( private userService: UserService ) {}

    public platform: string;
    private user: any;
    private name: string;
    private role: string;

    ngOnInit() {
        this.getUser();
        this.platform = "Angular2管理平台";
    }
    getUser() {
        this.userService.getUser()
        .then(
            user => {
                this.user = user;
                this.name = this.user.name;
                this.role = this.user.role;
            }
        )
        console.log(this.user);
    }

}
