import { Component, HostListener } from '@angular/core';
import { LeftNavbarService } from './services/left-nav/left-navbar.service';
import { NavbarService } from './services/top-nav/navbar.service';
import { Router } from "@angular/router";
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})


export class AppComponent {

    isHome = true;
    private loading: boolean = false;
    constructor(
        public leftNav: LeftNavbarService,
        private router: Router,
        public nav: NavbarService
    ) { }

    ngOnInit() {
        this.router.events.subscribe(s => {
            if (s['url'] == '/home' || s['url'] == '/' || s['url'] == '/login'
                 || s['url'] == '/register' || s['url'] == '/verify' || s['url'] == '/forgotPassword'
                 || s['url'] == '/changePassword' || s['url'] == '/danhsachapp'  ) {
                this.isHome = true;
            } else {
                this.isHome = false;
            }
        })
        console.log(this.isHome.toString());
    }


}




