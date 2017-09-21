import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginModule } from "./login/login.module";
import { SignupModule } from "./signup/signup.module";
import { UserinfoService } from "./userinfo.service";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LoginModule,
    SignupModule
  ],
  providers: [UserinfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
