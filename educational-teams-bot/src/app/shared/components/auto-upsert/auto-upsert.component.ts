import { Component, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Tag } from '../../classes/tag';
import { Speaker } from '../../classes/speaker';
import { AutoCrudService } from '../../services/auto-crud.service';
@Component({
  selector: 'app-auto-upsert',
  templateUrl: './auto-upsert.component.html',
  styleUrls: ['./auto-upsert.component.scss'],
})
export class AutoUpsertComponent {
  myForm!: FormGroup;
  _object: any;

  @Input()
  get object() {
    console.log('GET');

    return this._object;
  }
  set object(value: any) {
    console.log('test');

    this.objectProperties = this.propertyOfObject(value);
    this.myForm = this.fb.group({});
    this.objectProperties.forEach((object) => {
      this.myForm.addControl(object, this.fb.control(value[object]));
    });
    this._object = value;
  }
  objectProperties: string[] = [];

  tipe = require('tipe');
  constructor(
    private autoCrudService: AutoCrudService,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) data: any
  ) {
    this.object = data['object'];
    console.log(this.object);
  }

  customType(object: any) {
    if (object instanceof Speaker) {
      return true;
    } else if (object instanceof Tag) {
      return true;
    } else {
      return false;
    }
  }
  propertyOfObject(object: any) {
    return Object.keys(object);
  }

  listOfType(type: any) {
    let test = this.autoCrudService.fetchList(
      type[0].constructor.name.toLowerCase()
    );
    console.log(test);

    return [
      'Extra cheese',
      'Mushroom',
      'Onion',
      'Pepperoni',
      'Sausage',
      'Tomato',
    ];
  }
}
