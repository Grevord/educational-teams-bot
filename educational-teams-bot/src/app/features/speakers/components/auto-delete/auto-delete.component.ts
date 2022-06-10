import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-auto-delete',
  templateUrl: './auto-delete.component.html',
  styleUrls: ['./auto-delete.component.scss']
})
export class AutoDeleteComponent implements OnInit {

  @Input() object!: any;

  constructor(@Inject(MAT_DIALOG_DATA, ) data: any) {
    this.object = data['object']
   }

  ngOnInit(): void {
  }

}
