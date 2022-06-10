import { createAction } from '@ngrx/store';
import { Question } from 'src/app/shared/classes/question';

export const addQuestions = createAction(
  '[Questions] Add questions',
  (questions: Question[]) => ({ questions })
);
