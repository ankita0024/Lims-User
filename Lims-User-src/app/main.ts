import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';
import { Http,Response } from '@angular/http';

// const platform=platfromBrowserDynamic();
platformBrowserDynamic().bootstrapModule(AppModule);
