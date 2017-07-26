import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Benh } from '../models/benh';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { environment } from '../../environments/environment';

@Injectable()
export class BenhService {

    constructor(private http: Http) { }
    private benhUrl = `${environment.apiUrl}benh?soluongmoitrang=50`; 
    getBenh(page): Observable<any> {
        // ...using get request
        return this.http.get(`${this.benhUrl}&Trang=${page}`)
            // ...and calling .json() on the response to return data
            .map((res: Response) => res.json())
            //...errors if any
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

    getSearchBenh(key: String) {
        var searchUrl = `${this.benhUrl}&SearchTerm=${key}`;
        return this.http.get(searchUrl)
            // ...and calling .json() on the response to return data
            .map((res: Response) => res.json())
            //...errors if any
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));

    }

    getChiTietBenh(id: string): Observable<any> {
        var chiTietBenhUrl = `${environment.apiUrl}benh/${id}`;
        // ...using get request
        return this.http.get(chiTietBenhUrl)
            // ...and calling .json() on the response to return data
            .map((res: Response) => res.json())
            //...errors if any
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

    

}
