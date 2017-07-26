import { Component, OnInit } from '@angular/core';
import { FormControl } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { UserService } from "app/services/user.service";

@Component({
  selector: 'app-thay-doi-mat-khau',
  templateUrl: './thay-doi-mat-khau.component.html',
  styleUrls: ['./thay-doi-mat-khau.component.css']
})
export class ThayDoiMatKhauComponent implements OnInit {
  
  verifyCode: FormControl = new FormControl();
  newPassword: FormControl = new FormControl();
  IdU: string = null;
  phone: string = null;
  constructor(
    private router: Router,
    private activedroute: ActivatedRoute,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.activedroute.params.subscribe( pars => {
      console.log( pars['IdU'] )
      this.IdU = pars['IdU'];
      this.phone = pars['phone']
    })
  }

  changePassword(){
    this.userService.changePass(this.newPassword.value,this.verifyCode.value,this.phone,this.IdU).subscribe(
              (data) => {
                  console.log(data);
                  
                  if(data.Mes == "Thiếp lập mật khẩu mới thành công!"){
                    this.router.navigate(["/login"]);
                  }
              });
  }

}
