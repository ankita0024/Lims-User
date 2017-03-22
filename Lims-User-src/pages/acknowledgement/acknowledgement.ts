import { Component } from '@angular/core';
import { TabsPage } from '../pages/tabs/tabs';
import {URLSearchParams} from '@angular/http';
import { BarcodeScanner } from 'ionic-native';
import { NavController, NavParams } from 'ionic-angular';
import{UrlFetchApp} from 'httpresponse';
@Component({
  selector: 'page-acknowledgement',
  templateUrl: 'acknowledgement.html'
})
export class AcknowledgementPage {
  results:any;
  constructor() { }
  isbn=9783161484100;
    scan(isbn){
    // console.log(isbn);
    // BarcodeScanner.scan().then((result) => {
    //   this.results=barcodeData;
    //   let isbn=results.text;

        isbn = isbn || "9781451648546"; 
        console.log(isbn);
        var url = "https://www.googleapis.com/books/v1/volumes?q=isbn:" + isbn;
        
        var response = UrlFetchApp.fetch(url);
        
       console.log(response);
        var results = JSON.parse(response);
        console.log(results);
        if (results) {
           console.log(isbn);
          var book = results.items[0];
          var title = (book["volumeInfo"]["title"]);
          var subtitle = (book["volumeInfo"]["subtitle"]);
          var authors = (book["volumeInfo"]["authors"]);
          // var printType = (book["volumeInfo"]["printType"]);
          // var pageCount = (book["volumeInfo"]["pageCount"]);
          // var publisher = (book["volumeInfo"]["publisher"]);
          // var publishedDate = (book["volumeInfo"]["publishedDate"]);
          // var webReaderLink = (book["accessInfo"]["webReaderLink"]);
          console.log('title--- '+ title);
        }
        
        // },(err) => {
        //     alert(`error : ${err}`);
        //   });
        // }
        //}
        }
        reset(){
          this.results=null;
        }
}