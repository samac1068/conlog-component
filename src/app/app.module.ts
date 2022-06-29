import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ConlogDialogComponent } from './conlog-dialog/conlog-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    ConlogDialogComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
