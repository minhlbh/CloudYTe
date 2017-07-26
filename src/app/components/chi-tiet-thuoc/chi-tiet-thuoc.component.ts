import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../../services/top-nav/navbar.service';
import { LeftNavbarService } from '../../services/left-nav/left-navbar.service';


@Component({
    selector: 'app-chi-tiet-thuoc',
    templateUrl: './chi-tiet-thuoc.component.html',
    styleUrls: ['./chi-tiet-thuoc.component.css']
})
export class ChiTietThuocComponent implements OnInit {

    constructor(
        public nav: NavbarService,
        public leftNav: LeftNavbarService
    ) { }

    ngOnInit() {
        this.nav.show();
        this.leftNav.show();
    }
}
