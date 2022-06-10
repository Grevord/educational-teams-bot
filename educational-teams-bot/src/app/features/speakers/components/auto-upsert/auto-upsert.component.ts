import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import { Tag } from 'src/app/shared/classes/tag';
import { Speaker } from 'src/app/shared/classes/speaker';
import { AutoCrudService } from 'src/app/shared/services/auto-crud.service';
@Component({
  selector: 'app-auto-upsert',
  templateUrl: './auto-upsert.component.html',
  styleUrls: ['./auto-upsert.component.scss']
})
export class AutoUpsertComponent implements OnInit {
  myForm!: FormGroup
  _object: any
  children?:any
  @Input()
  get object() {
    return this._object
  }
  set object(value: any) {
   /* 
    const properties = this.propertyOfObject(value);
    this.objectProperties = properties.reduce((acc, property) => {

      const propertyType = this.tipe(value[property])
      const propertyInfo:never = { propertyType, propertyName: value, children}
      if(propertyType === 'array') {
        propertyInfo.children = this.listOfType(value[property])
      }
      acc.push(propertyInfo)
      return acc
    }, [])*/

    this.objectProperties = this.propertyOfObject(value);
    this.myForm = this.fb.group({});
    this.objectProperties.forEach((object: string) => {
      this.myForm.addControl(object, this.fb.control(value[object]))
    });
    this._object = value;
  }
   objectProperties: any 
  tipe = require('tipe');
  constructor(private autoCrudService: AutoCrudService,private fb: FormBuilder,@Inject(MAT_DIALOG_DATA, ) data: any) { 

    this.object = data['object']
    console.log(this.object);
   

  }

  ngOnInit(): void {
  
  }
  propertyOfObject(object:any) {
    return Object.keys(object)
    
  }

  listOfType(type:any){
   let test = this.autoCrudService.fetchList(type[0].constructor.name.toLowerCase());
   console.log(test);
   
    return ['Php', 'C#', 'CSS', 'HTML', 'JS', 'Java', 'Angular'];
  }
}
