import { Action, createReducer, on } from '@ngrx/store';
import { Question } from 'src/app/shared/classes/question';
import * as QuestionsActions from './questions.actions';

export const questionsFeatureKey = 'questions';

/**
 * Interface to use to manage questions state.
 */
export interface QuestionsState {
  questions: Question[];
}

export const initialState: QuestionsState = {
  questions: [],
};

export const questionsReducer = createReducer(
  initialState,
  on(QuestionsActions.addQuestions, (state: QuestionsState, { questions }) => ({
    ...state,
    questions: questions,
  }))
);

export function reducer(
  state: QuestionsState | undefined,
  action: Action
): any {
  return questionsReducer(state, action);
}
