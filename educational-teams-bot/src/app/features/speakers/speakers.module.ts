import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpeakersComponent } from './components/speakers/speakers.component';
import { SpeakerItemComponent } from './components/speaker-item/speaker-item.component';
import { AutoTableComponent } from './components/auto-table/auto-table.component';
import { AutoListComponent } from './components/auto-list/auto-list.component';
import { AutoUpsertComponent } from './components/auto-upsert/auto-upsert.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';



@NgModule({
  declarations: [
    SpeakersComponent,
    SpeakerItemComponent,
    AutoTableComponent,
    AutoListComponent,
    AutoUpsertComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    ReactiveFormsModule 
  ]
})
export class SpeakersModule { }
