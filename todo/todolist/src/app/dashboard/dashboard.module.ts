import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component'; 
import { ListModule } from "../list/list.module";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ListModule
  ],
  declarations: [DashboardComponent],
  exports:[DashboardComponent]
})
export class DashboardModule { }
