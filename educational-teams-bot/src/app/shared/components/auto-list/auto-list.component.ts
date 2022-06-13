import { Component,Inject,Input, OnInit } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AutoTableComponent } from '../auto-table/auto-table.component';

@Component({
  selector: 'app-auto-list',
  templateUrl: './auto-list.component.html',
  styleUrls: ['./auto-list.component.scss']
})
export class AutoListComponent implements OnInit {
  objectList : any
  tipe = require('tipe');
  constructor(@Inject(MAT_DIALOG_DATA) data: any) {
    this.objectList = data['objectsList']
    
  }
  propertyOfObject(object:any) {
    return Object.keys(object)
  }

  ngOnInit(): void {
  }

}
