import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-auto-list',
  templateUrl: './auto-list.component.html',
  styleUrls: ['./auto-list.component.scss'],
})
export class AutoListComponent {
  objectList: any;
  tipe = require('tipe');
  constructor(@Inject(MAT_DIALOG_DATA) data: any) {
    this.objectList = data['objectsList'];
  }
  propertyOfObject(object: any) {
    return Object.keys(object);
  }
}
