import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogFormAlertComponent } from './dialog-form-alert/dialog-form-alert.component';




@Component({
  selector: 'app-dialog-alert',
  templateUrl: './dialog-alert.component.html',
  styleUrls: ['./dialog-alert.component.scss']
})
export class DialogAlertComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  
  openDialogFormAlert() 
  {
    this.dialog.open(DialogFormAlertComponent);
  }


}
