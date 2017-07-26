import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { NavbarService } from '../../../services/top-nav/navbar.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor( 
      public nav: NavbarService,
      private location: Location
  ) { }

  ngOnInit() {
    this.nav.show();
  }

  goBack(): void {
      this.location.back();
  }
}
