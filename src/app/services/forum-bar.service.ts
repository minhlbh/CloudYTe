import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from "rxjs/Rx";

@Injectable()
export class ForumBarService {

  constructor(private http: Http) { }
  getForumBar(): Observable<any> {
        // ...using get request
        return this.http.get(`http://api.truongkhoa.com/api/Forum`)
            // ...and calling .json() on the response to return data
            .map((res: Response) => res.json())
            //...errors if any
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }
}
