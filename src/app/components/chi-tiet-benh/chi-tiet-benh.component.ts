import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../../services/top-nav/navbar.service';
import { LeftNavbarService } from '../../services/left-nav/left-navbar.service';


@Component({
    selector: 'app-chi-tiet-benh',
    templateUrl: './chi-tiet-benh.component.html',
    styleUrls: ['./chi-tiet-benh.component.css']
})
export class ChiTietBenhComponent implements OnInit {

    constructor(
        public nav: NavbarService,
        public leftNav: LeftNavbarService
    ) { }

    ngOnInit() {
        this.nav.show();
        this.leftNav.show();
    }
}
