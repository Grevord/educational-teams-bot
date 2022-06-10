import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromQuestions from './questions.reducer';

export const selectQuestionState =
  createFeatureSelector<fromQuestions.QuestionsState>(
    fromQuestions.questionsFeatureKey
  );

export const selectQuestions = createSelector(
  selectQuestionState,
  (state: fromQuestions.QuestionsState) => {
    return state.questions;
  }
);
