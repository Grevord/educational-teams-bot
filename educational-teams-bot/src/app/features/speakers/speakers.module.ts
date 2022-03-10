import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpeakersComponent } from './components/speakers/speakers.component';
import { SpeakerItemComponent } from './components/speaker-item/speaker-item.component';



@NgModule({
  declarations: [
    SpeakersComponent,
    SpeakerItemComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SpeakersModule { }
