import { Component, OnInit } from '@angular/core';

interface Riesgo {
  value: string;
  viewValue: string;
}

interface Action {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-dialog-form-alert',
  templateUrl: './dialog-form-alert.component.html',
  styleUrls: ['./dialog-form-alert.component.scss']
})
export class DialogFormAlertComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  riesgo: Riesgo[] = [
    {value: 'steak-0', viewValue: 'Aceptable', },
    {value: 'tacos-2', viewValue: 'Bajo'},
    {value: 'tacos-2', viewValue: 'Moderado'},
    {value: 'tacos-2', viewValue: 'Alto'},
    {value: 'tacos-2', viewValue: 'Muy Alto'}
  ];

  action: Action[] = [
    {value: 'steak-0', viewValue: 'Tomar ruta alterna', }
  ];


}
