import { Component, OnInit } from '@angular/core';
import { FormControl } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";

//service
import { UserService } from "app/services/user.service";

@Component({
  selector: 'app-quen-mat-khau',
  templateUrl: './quen-mat-khau.component.html',
  styleUrls: ['./quen-mat-khau.component.css']
})
export class QuenMatKhauComponent implements OnInit {
  error: string;

  phone: FormControl = new FormControl();
  constructor(
    private router: Router,
    private activedroute: ActivatedRoute,
    private userService: UserService
  ) { }
  ngOnInit() {

  }

  forgotPass() {
    console.log(this.phone.value)
    this.userService.forgotPassword(this.phone.value).subscribe(
      (data) => {
        console.log(data.mess);
        this.router.navigate(["/changePassword", data.IdU, this.phone.value]);
      },
      err => {
        this
        // alert("so dien thoai loi")
      }
    );
  }
}

