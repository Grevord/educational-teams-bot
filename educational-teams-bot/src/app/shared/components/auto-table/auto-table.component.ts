import { Component, Input } from '@angular/core';
import { Speaker } from 'src/app/shared/classes/speaker';
import { Tag } from 'src/app/shared/classes/tag';
import { MatDialog } from '@angular/material/dialog';
import { AutoListComponent } from '../auto-list/auto-list.component';
import { AutoUpsertComponent } from '../auto-upsert/auto-upsert.component';

@Component({
  selector: 'app-auto-table',
  templateUrl: './auto-table.component.html',
  styleUrls: ['./auto-table.component.scss'],
})
export class AutoTableComponent {
  @Input() objectList!: any[];
  @Input() delete!: Function;
  tipe = require('tipe');
  constructor(public dialog: MatDialog) {}

  propertyOfObject(object: any) {
    return Object.keys(object);
  }
  customType(object: any) {
    if (object instanceof Speaker) {
      return Speaker;
    } else {
      return Tag;
    }
  }
  listModal(objects: any[]) {
    let dialogRef = this.dialog.open(AutoListComponent, {
      data: { objectsList: objects },
    });
    dialogRef.afterClosed().subscribe(() => {
      console.log('The dialog was closed');
    });
  }
  edit(object: any) {
    let dialogRef = this.dialog.open(AutoUpsertComponent, {
      data: { object: object },
    });
    dialogRef.afterClosed().subscribe(() => {
      console.log('The dialog was closed');
    });
  }
}
