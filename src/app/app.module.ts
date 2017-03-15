import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { EscapeHtmlPipe } from './pipes/keep-html.pipe';
import { AddComponent } from './add/add.component';

@NgModule({
  declarations: [
    AppComponent,
    EscapeHtmlPipe,
    AddComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
