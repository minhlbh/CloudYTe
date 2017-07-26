import { Component, OnInit } from '@angular/core';
import { FormControl } from "@angular/forms";
import { Router } from "@angular/router";
import { UserService } from "app/services/user.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

    error: string = null;
    name: FormControl = new FormControl();
    phone: FormControl = new FormControl();
    email: FormControl = new FormControl();
    password: FormControl = new FormControl();
    ConfirmPassword: FormControl = new FormControl();
    constructor(
        private router: Router,
        private userService: UserService
    ) { }

  ngOnInit() {
     
  }

  registerSubmit() {
      
      if (this.ConfirmPassword.value == this.password.value) {
          this.userService.register(this.name.value, this.email.value, this.phone.value, this.password.value).subscribe(
              (data) => {
                  console.log(data);

                  this.router.navigate(["/verify",data.Id,data.Phone,data.Code]);
              });
      } else {
          this.error = "Mật khẩu nhập lại không chính xác!";
      };
  }
}
