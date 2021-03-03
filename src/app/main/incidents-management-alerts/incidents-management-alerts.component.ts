import { getCurrencySymbol } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DialogReportsComponent } from './dialog-reports/dialog-reports.component';
import { MatDialog } from '@angular/material/dialog';
import { DialogMessageComponent } from './dialog-message/dialog-message.component';

@Component({
  selector: 'app-incidents-management-alerts',
  templateUrl: './incidents-management-alerts.component.html',
  styleUrls: ['./incidents-management-alerts.component.scss']
})
export class IncidentsManagementAlertsComponent implements OnInit {
  
  constructor(public dialog: MatDialog) { }

  
  ngOnInit(): void {
 
  }
  openDialog() {
    this.dialog.open(DialogMessageComponent);
  }

}
