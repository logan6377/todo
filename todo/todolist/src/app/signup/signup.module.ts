import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [SignupComponent],
  exports:[SignupComponent]
})
export class SignupModule { }
