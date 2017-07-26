import { Injectable, Input } from '@angular/core';
import { Observable } from "rxjs/Rx";
import { environment } from "environments/environment";
import { Http, Response, Headers, RequestOptions } from '@angular/http';


@Injectable()
export class LeftNavbarService {
	
	[x: string]: any;

	visible: boolean;

	constructor(private http: Http) { }

	hide() { this.visible = false; }

	show() { this.visible = true; }

	toggle() { this.visible = !this.visible; }

	getLeftNav(){
		var menuLeft = `${environment.apiUrl}Menu?i=2`;
		return this.http.get(menuLeft)
            // ...and calling .json() on the response to return data
            .map((res: Response) => res.json())
            //...errors if any
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
	}

	
}
