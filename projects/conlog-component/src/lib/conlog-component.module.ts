import { NgModule } from '@angular/core';
import { ConlogComponentComponent } from './conlog-component.component';
import { ConlogDialogComponent } from './conlog-dialog/conlog-dialog.component';
import {ConlogComponentService} from "./conlog-component.service";
import {CommonModule} from "@angular/common";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    ConlogComponentComponent,
    ConlogDialogComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule
  ],
  exports: [
    ConlogComponentComponent
  ],
  providers: [
    ConlogComponentService
    ]
})
export class ConlogComponentModule { }
