import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss']
})
export class TagsComponent implements OnInit {

  tags = [
    {
     id: 1,
     name: 'tag 1'
   },
   {
     id: 2,
     name: 'tag 2'
   },
    {
     id: 2,
     name: 'tag 3'
   }
 ];

  constructor() { }

  ngOnInit(): void {
  }

}
