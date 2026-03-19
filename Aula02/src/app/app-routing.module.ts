import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './feature/main-page/main-page.component';
import { LoginPageComponent } from './feature/login-page/login-page.component';
import { NotFoundPageComponent } from './feature/not-found-page/not-found-page.component';

const routes: Routes = [
  {path: "", component:MainPageComponent},
  {path: "login", component:LoginPageComponent},
  {path: "**", component:NotFoundPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
