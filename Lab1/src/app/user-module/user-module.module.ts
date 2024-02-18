import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserInfoComponent } from './user-info/user-info.component';



@NgModule({
  declarations: [
    SignInComponent,
    SignUpComponent,
    UserInfoComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    SignInComponent,
    SignUpComponent,
    UserInfoComponent
  ]
})
export class UserModuleModule { }
