import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class BookService{
     constructor(private http: Http) { }
     getBook(): Observable<any> {
       console.log("Hello in book service");
    return this.http.get('172.17.120.74:8100/getbook').map((res:Response) => res.json());
  }
}