import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule } from "@angular/forms";

import {
  MatIconModule,
  MatListModule,
  MatMenuModule,
  MatButtonModule
} from "@angular/material";

import { AlertConfirmModule } from "../alert-confirm/alert-confirm.module";

import { AppComponent } from "./app.component";

@NgModule({
  imports: [
    BrowserModule,
    MatButtonModule,
    BrowserAnimationsModule,
    FormsModule,
    MatListModule,
    MatIconModule,
    MatMenuModule,
    AlertConfirmModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
