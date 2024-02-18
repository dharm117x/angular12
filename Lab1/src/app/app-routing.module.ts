import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './user-module/sign-in/sign-in.component';
import { SignUpComponent } from './user-module/sign-up/sign-up.component';
import { UserInfoComponent } from './user-module/user-info/user-info.component';

import { NopageComponent } from './nopage/nopage.component';

const routes: Routes = [
  {path:'signin',component:SignInComponent},
  {path:'signup',component:SignUpComponent},
  {path:'userinfo/:id', component:UserInfoComponent},
  {path:'**', component:NopageComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
