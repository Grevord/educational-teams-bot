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
      const properties = this.propertyOfObject(value);
      this.objectProperties = properties.reduce((acc: ObjectProperties[], property) => {
        const propertyType = this.tipe(value[property])
        const propertyInfo : ObjectProperties = { propertyType, propertyName: property }
        if(propertyType === 'array') {
          this.listOfType(value[property]).then((list) => {
            propertyInfo.children = list
          })
        }
        acc.push(propertyInfo)
        return acc
      }, [])
      console.log(this.objectProperties);

    this.myForm = this.fb.group({});
    this.objectProperties.forEach((object) => {
      this.myForm.addControl(object.propertyName, this.fb.control(value[object.propertyName]))
    });
    this._object = value;
  }
  objectProperties: ObjectProperties[] = [];
  tipe = require('tipe');
  constructor(private autoCrudService: AutoCrudService,private fb: FormBuilder,@Inject(MAT_DIALOG_DATA, ) data: any) {

    this.object = data['object']
    console.log("log");
    console.log(this.object);


  }

  ngOnInit(): void {

  }
  propertyOfObject(object:any) {
    return Object.keys(object)

  }

  async listOfType(type:any){
   let test = await this.autoCrudService.fetchList(type[0].constructor.name.toLowerCase());
   console.log("log list of type");
   console.log(test);

    return test
  }
}
interface ObjectProperties {
  propertyType: string,
  propertyName: string,
  children?: string[]
}
