import {Directive, EventEmitter, HostListener, Input, Output} from '@angular/core';
import {MatDialog} from '@angular/material';
import {AlertComponent} from './alert/alert.component';

@Directive({
  selector: '[alert-confirm]',
  exportAs: 'alertConfirm'
})
export class AlertConfirmDirective {

  @Input() name: string = '';
  @Output() onConfirmed = new EventEmitter();

  @HostListener('click', ['$event']) onClick(event) {
    this.dialog.open(AlertComponent, {data: this.name})
      .afterClosed()
      .subscribe(is => {
        if (is) {
          this.onConfirmed.emit(event);
        }
      });
  }

  constructor(private dialog: MatDialog) {
  }

}
