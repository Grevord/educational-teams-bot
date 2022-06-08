import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatFormField } from '@angular/material/form-field';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import { FormArray } from '@angular/forms';
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

  optionList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
  @Input() object!: any;
  tipe = require('tipe');
  constructor(private autoCrudService: AutoCrudService,private fb: FormBuilder,@Inject(MAT_DIALOG_DATA, ) data: any) { 
    this.myForm = this.fb.group({});
    this.object = data['object']
    console.log(this.object);
   let test = this.propertyOfObject(this.object)
   
test.forEach(element => {
  this.myForm.addControl(element, this.fb.control(this.object[element]))
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
   let test = this.autoCrudService.fetchList(type[0].constructor.name.toLowerCase());
   console.log(test);
   
    return ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
  }
}
