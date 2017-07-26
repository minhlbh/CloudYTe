import { Component, OnInit } from '@angular/core';
import { LeftNavbarService } from '../../../services/left-nav/left-navbar.service';
import { element } from 'app/models/phan-tu-menu-left';
import { Router, RouterLink } from '@angular/router';
import * as $ from 'jquery';
import { MenuService } from '../../../services/menu.service';

@Component({
    selector: 'left-app-navigation',
    templateUrl: './left-navigation.component.html',
    styleUrls: ['./left-navigation.component.css']
})
export class LeftNavigationComponent implements OnInit {
    private elements: element[];
    private iconText: string;
    public fullwidth = true;
    public styleConfig: any;
    constructor(
        public leftNav: LeftNavbarService,
        private router: Router,
        public menuService: MenuService,
    ) {
        this.styleConfig = this.menuService.getSetting();
    }

    ngOnInit() {
        this.leftNav.show();
        this.leftNav.getLeftNav().subscribe(data => {
            this.elements = data.home[0].items;
            this.iconText = this.elements[0].IconText.toString();
        });
    }

    goOut(u) {
        this.router.navigate(['chandoanhinhanh']);
    }
    changeMNView() {
        this.fullwidth = !this.fullwidth;
        $(".col-left-fixed").toggleClass("toggled");
        $(".main").toggleClass("toggled");
    }

}
