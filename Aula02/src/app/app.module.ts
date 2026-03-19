import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './feature/login-page/login-page.component';
import { MainPageComponent } from './feature/main-page/main-page.component';
import { NotFoundPageComponent } from './feature/not-found-page/not-found-page.component';
import { HeaderComponent } from './share/header/header.component';
import { NavComponent } from './share/nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    MainPageComponent,
    NotFoundPageComponent,
    HeaderComponent,
    NavComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
