import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogFormActionProtocolsComponent } from './dialog-form-action/dialog-form-action.component';

@Component({
  selector: 'app-dialog-action-protocols',
  templateUrl: './dialog-action-protocols.component.html',
  styleUrls: ['./dialog-action-protocols.component.scss']
})
export class DialogActionProtocolsComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialogFormActionProtocols() 
  {
    this.dialog.open(DialogFormActionProtocolsComponent);
  }

}
