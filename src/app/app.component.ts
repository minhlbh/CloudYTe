import { Component, OnInit, Inject, Injectable } from '@angular/core';
import { ConfigService } from './services/config.service'
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'app';
  constructor(
    @Inject(DOCUMENT) private document: any,
    private configService: ConfigService
  ) {
    this.configService.getSetting().subscribe(data => {
      console.log(data);
    })
  }
  ngOnInit(){
        console.log(this.document.location.hostname);
  }
}
