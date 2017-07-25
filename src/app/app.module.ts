import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { AppComponent } from './app.component';


import { ConfigService } from './services/config.service'

const routes: Routes = [
  { path: '', loadChildren: './Home/home.module#HomeModule' },
  { path: 'apps', loadChildren: './Apps/apps.module#AppsModule' }
];

const Routing: ModuleWithProviders = RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules });


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    Routing
  ],
  providers: [
    ConfigService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
