import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../../services/top-nav/navbar.service';
import { LeftNavbarService } from '../../services/left-nav/left-navbar.service';


@Component({
    selector: 'app-thuoc',
    templateUrl: './thuoc.component.html',
    styleUrls: ['./thuoc.component.css']
})
export class ThuocComponent implements OnInit {

    constructor(
        public nav: NavbarService,
        public leftNav: LeftNavbarService
    ) { }

    ngOnInit() {
        this.nav.show();
        this.leftNav.show();
    }
}
