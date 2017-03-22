import { BookService } from './../../app/services/book.service';
import { FilterPage } from '../filter/filter';
import { Nav} from 'ionic-angular';
import { Http,Response} from '@angular/http';
// import {HTTP_PROVIDERS} from 'angular2/http';

import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'page-search',
  templateUrl: 'search.html',

})
export class SearchPage implements OnInit {

  book=[];
  flag:boolean=false;

  constructor(public nav: Nav, private http: Http, private bookService: BookService ) { }
  presentPopover($event) {
    this.nav.push(FilterPage);
  }
  ngOnInit() {
    this.getBooks();
  }
  getBooks() {
    this.flag = true;
    this.bookService.getBook().map(res=>res.json()).subscribe(
      data => this.book = data,
      error => console.log(error)
    );
  }
  // addBooks(){
  //    this.bookService.addBooks().subscribe(
  //     data => this.book = data,
  //     error => console.log(error)
  //   );
  // }

}
