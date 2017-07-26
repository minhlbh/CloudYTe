import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { NavbarService } from '../../services/top-nav/navbar.service';
import { LeftNavbarService } from '../../services/left-nav/left-navbar.service';
import { BenhService } from '../../services/benh.service';
import { Benh } from '../../models/benh';
import { Subject } from "rxjs/Subject";
import "rxjs/add/operator/debounceTime";
import "rxjs/add/operator/distinctUntilChanged";
import { FormControl } from '@angular/forms';
import { chiTietBenh } from "app/models/chiTietBenh";
import { MenuService } from '../../services/menu.service';


@Component({
    selector: 'app-tra-cuu-benh',
    templateUrl: './tra-cuu-benh.component.html',
    styleUrls: ['./tra-cuu-benh.component.css']
})

export class TraCuuBenhComponent implements OnInit {
    iconText: any;
    elements: any;

    DsBenh: Benh[];
    TongSoLuong: number;
    startBenh: number;
    endBenh: number;
    ChiTietBenh: chiTietBenh = null;
    searchUpdate: Subject<string> = new Subject<string>();
    searchKey = new FormControl();
    public id: any;
    public loading = false;
    public empty = false;
    public showChiTiet = false;
    public loadMore = false;
    public isSearch = false;
    public page = 1;
    public styleConfig: any;
    constructor(
        public nav: NavbarService,
        public leftNav: LeftNavbarService,
        private benhService: BenhService,
        public menuService: MenuService,
    ) {
        this.styleConfig = this.menuService.getSetting();
        // this.searchChangeEmitter = <any>this.searchUpdate
        //     // .asObservable()
        //     .debounceTime(1000)
        //     .distinctUntilChanged()// accept only relevant chars
        //     ;
        // this.searchUpdate
        //     .debounceTime(300)
        //     .distinctUntilChanged()
        //     .subscribe(searchKey => this.searchKey = searchKey);

        this.searchKey.valueChanges
            .debounceTime(1000)
            .subscribe((event) => {
                this.changed(event);
                this.clickBenh(null);
            });

    }

    ngOnInit() {
        this.nav.show();
        this.leftNav.show();
        this.benhService.getBenh(1).subscribe(data => {
            this.DsBenh = data.DsBenh;
            this.TongSoLuong = data.TongSoLuong;
            this.startBenh = 0;
            this.endBenh = 50;

        });
        this.leftNav.getLeftNav().subscribe(data => {
            this.elements = data.home[0].items;
            this.iconText = this.elements[0].IconText.toString();
        });
    }
    changed(text: string) {

        if (text == "") {
            this.isSearch = false;
            this.benhService.getBenh(1).subscribe(data => {
                this.DsBenh = data.DsBenh;
                this.TongSoLuong = data.TongSoLuong;
                this.startBenh = (this.page - 1) * 50;
                this.endBenh = this.page * 50;

            });
        } else {
            this.isSearch = true;
            this.loading = true;
            this.searchUpdate.next(text);
            setTimeout(() => {
                this.benhService.getSearchBenh(text).subscribe(data => {
                    this.DsBenh = data.DsBenh;
                    this.TongSoLuong = data.TongSoLuong;
                    this.startBenh = 0;
                    this.endBenh = data.TongSoLuong;
                    if (this.DsBenh.length == 0 && this.TongSoLuong == 0) {
                        this.empty = true;
                    } else {
                        this.empty = false;
                    }
                    this.loading = false;

                });
            }, 1500);

        }
    }

    clickBenh(id: number) {
        if (id == null) {
            this.showChiTiet = false;
        }
        if (id != null) {
            this.showChiTiet = true;
            if (this.ChiTietBenh == null || this.ChiTietBenh.id != id) {
                this.benhService.getChiTietBenh(id.toString()).subscribe(data => {
                    this.ChiTietBenh = data;

                });
            }
        }

    }

    onScroll() {
        console.log('phep chia: ' + this.TongSoLuong / 50);
        if (this.isSearch || this.page > this.TongSoLuong / 50) {
            return;
        }
        else {

            this.loadMore = true;

            this.page++;
            console.log(this.page);
            this.benhService.getBenh(this.page).subscribe(data => {
                for (var i = 0; i < data.DsBenh.length; i++) {
                    this.DsBenh.push(data.DsBenh[i]);

                }
                this.startBenh = (this.page - 1) * 50;
                this.endBenh = this.page * 50;
                this.loadMore = false;

            });

        }
    }

    setIconText(): string {
        return this.leftNav.getIconText();
    }
}
