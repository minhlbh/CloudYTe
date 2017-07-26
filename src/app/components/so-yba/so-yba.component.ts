import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../../services/top-nav/navbar.service';
import { LeftNavbarService } from '../../services/left-nav/left-navbar.service';

@Component({
  selector: 'app-so-yba',
  templateUrl: './so-yba.component.html',
  styleUrls: ['./so-yba.component.css']
})
export class SoYBaComponent implements OnInit {

  constructor(
      public nav: NavbarService,
      public leftNav: LeftNavbarService
  ) { }

  ngOnInit() {
      this.nav.show();
      this.leftNav.show();
  }

}
