import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

interface Alerta {
  value: string;
  viewValue: string;
}

interface Riesgo {
  value: string;
  viewValue: string;
}

interface Action {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-dialog-form-key-words',
  templateUrl: './dialog-form-key-words.component.html',
  styleUrls: ['./dialog-form-key-words.component.scss']
})
export class DialogFormKeyWordsComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  foods: Alerta[] = [
    {value: 'steak-0', viewValue: 'Manifestación'},
    {value: 'tacos-2', viewValue: 'Accidente en vía'},
    {value: 'tacos-2', viewValue: 'Cambio Meteorológico'}
  ];

  riesgo: Riesgo[] = [
    {value: 'steak-0', viewValue: 'Aceptable', },
    {value: 'tacos-2', viewValue: 'Bajo'},
    {value: 'tacos-2', viewValue: 'Moderado'},
    {value: 'tacos-2', viewValue: 'Alto'},
    {value: 'tacos-2', viewValue: 'Muy Alto'}
  ];

  
  action: Action[] = [
    {value: 'steak-0', viewValue: 'Home Office', }
  ];

  ngOnInit(): void {
  }

  openDialogFormKeyWords() 
  {
    this.dialog.open(DialogFormKeyWordsComponent);
  }

}
