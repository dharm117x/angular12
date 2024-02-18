import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MenueComponent } from './menue/menue.component';
import { UserModuleModule } from './user-module/user-module.module';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { NopageComponent } from './nopage/nopage.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    MenueComponent,
    HeaderComponent,
    NopageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    UserModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
