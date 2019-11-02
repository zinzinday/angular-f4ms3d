import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AlertConfirmDirective} from './alert-confirm.directive';
import {AlertComponent} from './alert/alert.component';
import {
  MatButtonModule,
  MatDialogModule
} from '@angular/material';


@NgModule({
  declarations: [
    AlertConfirmDirective,
    AlertComponent
  ],
  entryComponents: [
    AlertComponent
  ],
  exports: [
    AlertConfirmDirective,
    AlertComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule
  ],
})
export class AlertConfirmModule {
}
