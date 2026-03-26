import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './share/header/header.component';
import { SquareComponent } from './share/square/square.component';
import { LoginPageComponent } from './feature/main-page/login-page/login-page.component';
import { RegisterPageComponent } from './feature/main-page/register-page/register-page.component';
import { MainPageComponent } from './feature/main-page/main-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SquareComponent,
    LoginPageComponent,
    RegisterPageComponent,
    MainPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }