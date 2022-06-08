import { Component,Input, OnInit } from '@angular/core';
import { Speaker } from 'src/app/shared/classes/speaker';
import { Tag } from 'src/app/shared/classes/tag';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { AutoListComponent } from '../auto-list/auto-list.component';
import { AutoUpsertComponent } from '../auto-upsert/auto-upsert.component';

@Component({
  selector: 'app-auto-table',
  templateUrl: './auto-table.component.html',
  styleUrls: ['./auto-table.component.scss']
})
export class AutoTableComponent implements OnInit {

  @Input() objectList!: any[];
  /*
  @Input()
  get objectList(): any[] { 
    console.log('le log du get');
    
    return this._objectList; }
  set objectList(objectList: any[]) {
    this.objectProperties= this.propertyOfObject(objectList)
  }
  private _objectList = [];
  @Input() objectProperties! : any[]
  */
  @Input() delete!: Function;
  tipe = require('tipe');
  constructor(public dialog: MatDialog) { 

  }

  ngOnInit(): void {
  }
  propertyOfObject(object:any) {

    return Object.keys(object)
  }
  customType(object:any)
  {
    
    if(object instanceof Speaker)
    {
      return Speaker
      
    }
    else
    {
      return Tag
    }
  }
  listModal(objects:any[]) {
    
    let dialogRef = this.dialog.open(AutoListComponent, {
      data: {objectsList: objects, }
    }
    );
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  edit(object:any) {
    
    let dialogRef = this.dialog.open(AutoUpsertComponent, {
      data: {object: object, }
    }
    );
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  }
