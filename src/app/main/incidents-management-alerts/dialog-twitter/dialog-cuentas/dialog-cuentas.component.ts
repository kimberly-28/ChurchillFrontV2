import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogFormAccountComponent } from './dialog-form-account/dialog-form-account.component';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-dialog-cuentas',
  templateUrl: './dialog-cuentas.component.html',
  styleUrls: ['./dialog-cuentas.component.scss']
})
export class DialogCuentasComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {

  }

  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Meteorológico'},
    {value: 'pizza-1', viewValue: 'Tráfico y Transporte'},
    {value: 'tacos-2', viewValue: 'Accidente en vía'},
    {value: 'tacos-2', viewValue: 'Noticias'}
  ];

  openDialogFormAccount() 
  {
    this.dialog.open(DialogFormAccountComponent);
  }

  }

