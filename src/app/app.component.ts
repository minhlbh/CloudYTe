import { Component, HostListener, Inject } from '@angular/core';
import { LeftNavbarService } from './services/left-nav/left-navbar.service';
import { NavbarService } from './services/top-nav/navbar.service';
import { MenuService } from './services/menu.service';
import { Router } from '@angular/router';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {

    isHome = true;
    private loading = false;
    constructor(
        public leftNav: LeftNavbarService,
        private router: Router,
        public nav: NavbarService,
        private menuService: MenuService,
    ) {
        this.menuService.getStartScreen().subscribe(rs => {
            this.menuService.setSetting(rs.setting);
        });
    }

    // tslint:disable-next-line:use-life-cycle-interface
    ngOnInit() {
        this.router.events.subscribe(s => {
            if (s['url'] === '/home' || s['url'] === '/' || s['url'] === '/login'
                || s['url'] === '/register' || s['url'] === '/verify' || s['url'] === '/forgotPassword'
                || s['url'] === '/changePassword' || s['url'] === '/danhsachapp') {
                this.isHome = true;
            } else {
                this.isHome = false;
            }
        });

    }


}




