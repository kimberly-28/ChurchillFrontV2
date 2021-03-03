import { Component, ElementRef, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { fuseAnimations } from '@fuse/animations';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';


import { DataSource } from '@angular/cdk/collections';
import { BehaviorSubject, fromEvent, merge, Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, takeUntil } from 'rxjs/operators';
import { FuseUtils } from '@fuse/utils';

export interface PeriodicElement {
  id: number;
  reference: string;
  customer: number;
  total: number;
  payment: string;
  status: string;
  date: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, reference: 'Neon', customer: 20.1797, total: 324, payment: '220', status:'sadsa', date:'448'},
  {id: 2, reference: 'Neon', customer: 20.1797, total: 3242, payment: '220', status:'sadsa', date:'448'},
  {id: 3, reference: 'Neon', customer: 20.1797, total: 234, payment: '220', status:'sadsa', date:'448'},
  {id: 4, reference: 'Neon', customer: 20.1797, total: 455, payment: '220', status:'sadsa', date:'448'},
  {id: 5, reference: 'Neon', customer: 20.1797, total: 45325, payment: '220', status:'sadsa', date:'448'},
  {id: 6, reference: 'Neon', customer: 20.1797, total: 345, payment: '220', status:'sadsa', date:'448'},
  {id: 7, reference: 'Neon', customer: 20.1797, total: 543, payment: '220', status:'sadsa', date:'448'},
  {id: 8, reference: 'Neon', customer: 20.1797, total: 3534, payment: '220', status:'sadsa', date:'448'},
  {id: 9, reference: 'Neon', customer: 20.1797, total: 35345, payment: '220', status:'sadsa', date:'448'},
  {id: 10, reference: 'Neon', customer: 20.1797, total: 354, payment: '220', status:'sadsa', date:'448'},
];


@Component({
  selector: 'app-logistic-transportation',
  templateUrl: './logistic-transportation.component.html',
  styleUrls: ['./logistic-transportation.component.scss'],
  animations   : fuseAnimations,
    encapsulation: ViewEncapsulation.None
})
export class LogisticTransportationComponent implements OnInit, OnDestroy {
  
    single: any[];
    view: any[] = [1200, 350];
  
     // options
     showLegend = true;
     showLabels = true;
  
  
     colorScheme = {
      domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
    };
  
  constructor(
 
  ) { }

  
    ngOnDestroy(): void
    {
        // Unsubscribe from all subscriptions
    }

  ngOnInit(): void {
  }

}
