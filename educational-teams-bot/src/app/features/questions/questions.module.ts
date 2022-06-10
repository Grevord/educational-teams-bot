import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionsComponent } from './components/questions/questions.component';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { questionsFeatureKey, reducer } from './state/questions.reducer';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [QuestionsComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forFeature(questionsFeatureKey, reducer),
    SharedModule,
  ],
})
export class QuestionsModule {}
