import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { environment } from '../../environments/environment';


@Injectable()
export class MenuService {
    private home = [];
    constructor(private http: Http) { }
    private menu = `${environment.apiUrl}/menu`;
    getStartScreen(): Observable<any> {
        // ...using get request
        return this.http.get(this.menu)
            // ...and calling .json() on the response to return data
            .map((res: Response) => res.json())
            //...errors if any
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }
    getLocalStartScreen() {
        this.home = JSON.parse(localStorage.getItem("home_menu"));
        return this.home;
    }
    setLocalStarScreen(data) {
        localStorage.setItem("home_menu", JSON.stringify(data));
        this.home = data;
    }

}
