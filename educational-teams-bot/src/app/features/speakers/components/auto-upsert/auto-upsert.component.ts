import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatFormField } from '@angular/material/form-field';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import { FormArray } from '@angular/forms';
import { Tag } from 'src/app/shared/classes/tag';
import { Speaker } from 'src/app/shared/classes/speaker';
@Component({
  selector: 'app-auto-upsert',
  templateUrl: './auto-upsert.component.html',
  styleUrls: ['./auto-upsert.component.scss']
})
export class AutoUpsertComponent implements OnInit {
  myForm!: FormGroup

  optionList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
  @Input() object!: any;
  tipe = require('tipe');
  constructor(private fb: FormBuilder,@Inject(MAT_DIALOG_DATA, ) data: any) { 
    this.myForm = this.fb.group({});
    this.object = new data['object']
    console.log(this.object);
   let test = this.propertyOfObject(this.object)
   
test.forEach(element => {
  this.myForm.addControl(element, this.fb.control(null))
     
});

  }

  ngOnInit(): void {
  
  }
  customType(object:any)
  {
    
    if(object instanceof Speaker)
    {
      return true
      
    }
    else if(object instanceof Tag)
    {
      return true
    }
    else
    {
      return false
    }
  }
  propertyOfObject(object:any) {
    return Object.keys(object)
  }

  listOfType(type:any){
    console.log('allo ?');
    
    console.log(this.propertyOfObject(type));
    let test2 = (type instanceof  Tag)
    console.log(test2);
    return ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
  }
}
