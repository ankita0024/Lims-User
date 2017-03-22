import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BookService } from './services/book.service';
import { NgModule, Component } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import {HelpPage} from '../pages/help/help';
import { NotificationPage } from '../pages/notification/notification';
import { SearchPage } from './../pages/search/search';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import {AcknowledgementPage} from '../pages/acknowledgement/acknowledgement';
import {RecommendationPage} from '../pages/recommendation/recommendation';
import {WishListPage} from '../pages/wishList/wishList';
import {FilterPage} from '../pages/filter/filter';

@NgModule({
  declarations: [
    MyApp,
    SearchPage,
    HelpPage,
    NotificationPage,
    HomePage,
    TabsPage,
    RecommendationPage,
    WishListPage,
    AcknowledgementPage,
    FilterPage

  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SearchPage,
    HelpPage,
    NotificationPage,
    HomePage,
    TabsPage,
     RecommendationPage,
    WishListPage,
    AcknowledgementPage,
    FilterPage

  ],
  providers: [BookService]
})
export class AppModule {}
