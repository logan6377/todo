import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginModule } from "./login/login.module";
import { SignupModule } from "./signup/signup.module";
import { UserinfoService } from "./userinfo.service";
import { DashboardModule } from "./dashboard/dashboard.module";
import { ListModule } from "./list/list.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LoginModule,
    SignupModule,
    DashboardModule,
    ListModule
  ],
  providers: [UserinfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
