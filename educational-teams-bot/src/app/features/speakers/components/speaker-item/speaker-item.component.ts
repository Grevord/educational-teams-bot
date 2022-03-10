import { Component, Input, OnInit } from '@angular/core';
import { Speaker } from 'src/app/shared/classes/speaker';
import { Tag } from 'src/app/shared/classes/tag';

@Component({
  selector: 'app-speaker-item',
  templateUrl: './speaker-item.component.html',
  styleUrls: ['./speaker-item.component.scss']
})
export class SpeakerItemComponent implements OnInit {

  @Input() speaker!: Speaker;

  constructor() { 

    
  }

  ngOnInit(): void {
    console.log(this.speaker);
  }
  edit(){
    console.log("salut �a marche je suis l'edit");
    
  }
  tags(){
    console.log("salut �a marche je suis la tag list");
    
  }
  delete(){
    console.log("salut �a marche je suis la destruction");
    
  }

}
