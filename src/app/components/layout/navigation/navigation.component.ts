import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { NavbarService } from '../../../services/top-nav/navbar.service';
import { MenuService } from '../../../services/menu.service';

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
    styleConfig = [];
    constructor(
        public nav: NavbarService,
        public menuService: MenuService,
        private location: Location
    ) {
        this.styleConfig = this.menuService.getSetting();
    }

    ngOnInit() {
        this.nav.show();
    }

    goBack(): void {
        this.location.back();
    }
}
