import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));


//https://miro.com/app/board/uXjVPc0AUrc=/
//install ANGULAR: 
//  npm install -g @angular/cli
//generate new App:
//  ng new appName
//run the app:
//  ng serve
//generate new component:
//  ng generate component xyz
//use angular material library:
//  ng add @angular/material