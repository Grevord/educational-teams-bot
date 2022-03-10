import { Component,Input, OnInit } from '@angular/core';
import { Speaker } from 'src/app/shared/classes/speaker';
import { Tag } from 'src/app/shared/classes/tag';
@Component({
  templateUrl: './speakers.component.html',
  styleUrls: ['./speakers.component.scss']
})
export class SpeakersComponent implements OnInit {
@Input() speakers!: Speaker[]

  constructor() { 
    this.speakers = [new Speaker("abcd", "Michel Girard", "michel.girard@diiage.org", "Absent", [new Tag("a", "C#"), new Tag("b", "html") , new Tag("b", "html") , new Tag("b", "html") , new Tag("b", "html") , new Tag("b", "html") , new Tag("b", "html") , new Tag("b", "html") , new Tag("b", "html")]),
    new Speaker("dz", "Michel Girardot", "michel.girard@diiage.org", "Absent", [new Tag("a", "C#"), new Tag("b", "html") , new Tag("b", "html") , new Tag("b", "html") , new Tag("b", "html") , new Tag("b", "html") , new Tag("b", "html") , new Tag("b", "html") , new Tag("b", "html")])
  ]

  }

  ngOnInit() {
   }

   edit(){
    console.log("salut ça marche je suis l'edit");

  ngOnInit(): void {
  }
  delete(){
    console.log("salut �a marche je suis la destruction");

}
}
