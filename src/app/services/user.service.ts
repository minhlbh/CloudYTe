import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { URLSearchParams } from '@angular/http';

import { environment } from '../../environments/environment';
import 'rxjs/add/operator/map';
import { Observable } from "rxjs/Rx";

@Injectable()
export class UserService {

	authToken: String = null;
	tokenType: string = null;
	private userUrl = `${environment.apiUrl}Account/UserInfo`;

	constructor(private http: Http) { }

	// createAuthorizationHeader(headers: Headers, token_type, token) {
	// 	headers.append('Authorization', "Bar " + token);
	// 	console.log(headers);
	// }

	getUser(token_type, token): Observable<any> {
		let header = new Headers();
		header.append('Authorization', `Bearer ${token}`);
		return this.http.get(`http://truongkhoa.com/api/Account/UserInfo`, this.jwt())
			// ...and calling .json() on the response to return data
			.map((res: Response) => res.json())
			;

			
			
	}

	jwt() {
        // create authorization header with jwt token
		
        const headers = new Headers({ 'Authorization': "bearer " + this.getLocalToken() });
        headers.append('Content-Type', 'application/json');
		headers.append('Accept', 'application/json');
		console.log(headers)
        return new RequestOptions({ headers: headers });
	}
	
	forgotPassword(phone){
		let body = new URLSearchParams();
		body.set('Phone', phone);
		return this.http.post(`http://truongkhoa.com/api/Account/ForgotPassword`,body).map((response: Response) => response.json());
	}

	changePass(newPass, code, phone, idU){
		let body = new URLSearchParams();
		body.set('PhoneNumber', phone);
		body.set('Code', code);
		body.set('Password', newPass);
		return this.http.post('http://truongkhoa.com/api/Account/ForgotPassword?IdU=' + idU, body).map((response: Response) => response.json());
	}

	login(username, password) {
		let body = new URLSearchParams();
		body.set('username', username);
		body.set('password', password);
		body.set('grant_type', "password");
		return this.http.post(`http://truongkhoa.com/Token`, body).map((response: Response) => response.json());
	}

	register(name, email, phone, password) {
		let body = new URLSearchParams();
		body.set('HoVaTen', name);
		body.set('Email', email);
		body.set('Phone', phone);
		body.set('Password', password);

		return this.http.post('http://truongkhoa.com/api/Account/Register', body).map((response: Response) => response.json());
	}

	verifyCode(code, phone, idUser) {
		let body = new URLSearchParams();
		body.set('Code', code);
		body.set('PhoneNumber', phone);


		return this.http.post('http://truongkhoa.com/api/Account/XacNhanPhone?IdU=' + idUser, body).map((response: Response) => response.json());
	}

	setTokenType(token_type: string) {
		this.tokenType = token_type;
		localStorage.setItem('token_type', token_type);
	}
	setAuthToken(token: string) {
		this.authToken = token;
		localStorage.setItem('token', token);
	}
	getLocalToken() {
		return localStorage.getItem('token') ? localStorage.getItem('token') : null
	}

	getLocalTokenType() {
		return localStorage.getItem('token_type') ? localStorage.getItem('token_type') : null
	}

	setAuth(data){
		localStorage.setItem("auth", JSON.stringify(data));
	}

	getAuth(){
		return JSON.parse(localStorage.getItem("auth"));
	}

	refreshToken() {

	}

}