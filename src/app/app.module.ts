import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HomeSidenavComponent } from './home/home-sidenav/home-sidenav.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeSidenavComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
