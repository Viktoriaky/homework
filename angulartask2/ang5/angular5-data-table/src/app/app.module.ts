import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';


import { CommonModule } from '@angular/common';
import {MatInputModule, MatTableModule, MatToolbarModule } from '@angular/material';

@NgModule({
  imports: [CommonModule, MatToolbarModule, MatInputModule, MatTableModule],
  exports: [CommonModule, MatToolbarModule, MatInputModule, MatTableModule],
})
export class MaterialModule { }

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
