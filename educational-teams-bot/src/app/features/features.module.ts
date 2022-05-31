import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardModule } from './dashboard/dashboard.module';
import { FeaturesRoutingModule } from './features-routing.module';
import { QuestionsModule } from './questions/questions.module';
import { TagsModule } from './tags/tags.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, DashboardModule, FeaturesRoutingModule, QuestionsModule, TagsModule],
})
export class FeaturesModule {}
