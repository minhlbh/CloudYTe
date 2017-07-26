import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../../services/top-nav/navbar.service';
import { MenuService } from '../../services/menu.service';
import { LeftNavbarService } from '../../services/left-nav/left-navbar.service';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { query, stagger, animate, style, transition, trigger } from '@angular/animations';




@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    animations: [
        trigger('pageAnimation', [
            transition(':enter', [
                query('.item', style({ transform: 'translateX(150px)', opacity: 0 })),

                // query(
                //     '.item', animate('800ms cubic-bezier(.35,0,.25,1)', style('*'))
                // ),
                query('.item', [
                    stagger(200, [
                        animate('800ms cubic-bezier(.35,0,.25,1)', style('*'))
                    ])
                ])
            ]),
        ])
    ]
})
export class HomeComponent implements OnInit {

    idThe = new FormControl();
    localToken: string;
    tokenType: string;
    username: string;
    searchKey = new FormControl();
    homeScreenMenu: any;
    localScreen: any;
    auth: any;
    public runAnimation = false;
    constructor(
        private router: Router,
        public nav: NavbarService,
        public leftNav: LeftNavbarService,
        private userService: UserService,
        private menuService: MenuService
    ) {
        this.nav.hide();
        this.leftNav.hide();
        // this.searchKey.valueChanges
        //     .debounceTime(500)
        //     .subscribe((event) => {
        //         this.doSearch(event);
        //         console.log(event)
        //     });
    }

    ngOnInit() {

        this.menuService.getStartScreen().subscribe((data) => {
            this.homeScreenMenu = data.home;
            this.auth = this.userService.getAuth();
            this.runAnimation = true;
            this.menuService.setLocalStarScreen(data.home);
            this.localScreen = this.menuService.getLocalStartScreen();
        })

    }

    logOut() {
        this.router.navigate(['/logout'])
    }

    showAll(menuItem) {

        this.router.navigate([`/danhsachapp/${menuItem}`]);
    }

    doSearch(e) {
        console.log(this.searchKey.value);
        // console.log(this.localScreen)
        // tempMN.forEach(element => {
        //     element.items = this.searchItems(searchKey, element.items);
        // });
        // if (searchKey == "") {
        //     return tempMN;
        // } else {
        this.homeScreenMenu = this.menuService.getLocalStartScreen();
        for (var i = 0; i < this.homeScreenMenu.length; i++) {

            this.homeScreenMenu[i].items = this.searchItems(this.searchKey.value, this.localScreen[i].items);

        }
        console.log(this.homeScreenMenu);
        console.log(this.menuService.getLocalStartScreen());
        // console.log(this.ssss(tempMN,"Ten","bệnh"))
        // }

    }



    searchItems(s: string, items) {
        // console.log(items);
        s = s.toLowerCase();
        var _temp = [];
        for (var i = 0; i < items.length; i++) {
            if (items[i].Ten.toLowerCase().indexOf(s) != -1 || items[i].tomtat.toLowerCase().indexOf(s) != -1) {
                _temp = [..._temp, items[i]];
            }
        }
        return _temp;
    }

    

}

