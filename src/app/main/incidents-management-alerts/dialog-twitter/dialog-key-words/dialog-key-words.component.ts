import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogFormKeyWordsComponent } from './dialog-form-key-words/dialog-form-key-words.component';



interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-dialog-key-words',
  templateUrl: './dialog-key-words.component.html',
  styleUrls: ['./dialog-key-words.component.scss']
})
export class DialogKeyWordsComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Manifestación'},
    {value: 'tacos-2', viewValue: 'Accidente en vía'},
    {value: 'tacos-2', viewValue: 'Cambio Meteorológico'}
  ];

  ngOnInit(): void {

  }

  openDialogFormKeyWords() 
  {
    this.dialog.open(DialogFormKeyWordsComponent);
  }

}
