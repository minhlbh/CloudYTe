﻿import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class TextComponent implements OnInit {
   @Input() tenbien: string;
  constructor() { }

  ngOnInit() {
  }

}
