import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './feature/main-page/main-page.component';
import { RegisterPageComponent } from './feature/main-page/register-page/register-page.component';
import { LoginPageComponent } from './feature/main-page/login-page/login-page.component';

const routes: Routes = [
  {path: "", component:MainPageComponent, children:[
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    {path: "register", component: RegisterPageComponent},
    {path: "login", component: LoginPageComponent}
  ]}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
