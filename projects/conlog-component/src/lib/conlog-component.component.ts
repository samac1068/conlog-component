import {Component, HostListener, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {ConlogDialogComponent} from "./conlog-dialog/conlog-dialog.component";

@Component({
  selector: 'lib-conlog-component',
  template: ` `,
  styles: [
  ]
})
export class ConlogComponentComponent implements OnInit {

  isConsoleOpen: boolean = false;
  dialogQuery: any;

  constructor(public dialog: MatDialog) { }

  // Adding Global Host listener for single global keyboard command of CTRL+Y
  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if(event.ctrlKey && event.code == "KeyY") {
      //  A request to open the logging console has been executed
      if(!this.isConsoleOpen) {
        this.isConsoleOpen = true;
        this.dialogQuery = this.dialog.open(ConlogDialogComponent, {
          width: '650px',
          height: '870px',
          autoFocus: false,
          position: {right: '20px', top: '10px' }
        });

        this.dialogQuery.afterClosed().subscribe(() => {
          this.isConsoleOpen = false;
        });
      } else {
        this.dialogQuery.close();
      }
    }
  }

  ngOnInit(): void {
  }

}
