import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { FormControl } from '@angular/forms';
import { Router,RouterLink  } from '@angular/router';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {

	error:string = null;
	username: FormControl = new FormControl();
	password: FormControl = new FormControl();

    constructor(
        private router: Router,
		private userService: UserService
	) {
		
		
		this.username.valueChanges.subscribe(v => {
			this.error = null;
		})
		this.password.valueChanges.subscribe(v => {
			this.error = null;
		})
	 }

	ngOnInit() {

	}

	onLoginSubmit() {
		console.log(this.username.value, this.password);
		this.userService.login(this.username.value, this.password.value).subscribe(
			(data) => {
				console.log(data.access_token);
				console.log(data.token_type);
				this.userService.setAuthToken(data.access_token);
				this.userService.setTokenType(data.token_type);
				this.userService.setAuth(data);
                this.router.navigate(["/home"]);
			},
			err => {
				const errOb = JSON.parse(err.text());
				console.log("error:", errOb.error_description);
				this.error = errOb.error_description;
            }
		)
	}

}

