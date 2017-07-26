import { Component, OnInit } from '@angular/core';
import { FormControl } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { UserService } from "app/services/user.service";
import 'rxjs/add/operator/switchMap';
@Component({
  selector: 'app-verify-code',
  templateUrl: './verify-code.component.html',
  styleUrls: ['./verify-code.component.css']
})
export class VerifyCodeComponent implements OnInit {

  error: string = null;
  IdU: string = null;
  Phone: string = null;
  verifyCode: FormControl = new FormControl();
  constructor(
    private router: Router,
    private activedroute: ActivatedRoute,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.activedroute.params.subscribe( pars => {
      console.log( pars['IdU'],pars['phone'],pars['code'] )
      this.IdU = pars['IdU'];
      this.Phone = pars['phone'];
    })
  }

  verification() {
      this.userService.verifyCode(this.verifyCode.value,this.Phone,this.IdU).subscribe(
              (data) => {
                  console.log(data);
                  this.error = data;
                  if(data == "Xác nhận Phone thành công"){
                    this.router.navigate(["/login"]);
                  }
              });
  }

}
