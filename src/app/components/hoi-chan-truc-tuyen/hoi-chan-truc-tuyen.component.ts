import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-hoi-chan-truc-tuyen',
  templateUrl: './hoi-chan-truc-tuyen.component.html',
  styleUrls: ['./hoi-chan-truc-tuyen.component.css']
})
export class HoiChanTrucTuyenComponent implements OnInit {

  showVideo = false;
  tenphong = "hoichan-truongkhoa";
  urlFrame = `https://meet.jit.si/${this.tenphong}`;
  constructor(public sanitizer: DomSanitizer) { }

  ngOnInit() {
  }

  startCallVideo() {
    if (this.tenphong == "") {
      alert("Tên phòng không được bỏ trống");
      this.showVideo = false;
    }
    else {
      this.urlFrame = `http://meet.jit.si/${this.tenphong}`;
      this.showVideo = true;
    }

  }
  endCallVideo() {
    this.tenphong = "";
    this.showVideo = false;
  }

}
