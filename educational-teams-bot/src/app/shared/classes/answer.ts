import { AnswerReaction } from "./answer-reaction";

/**
 * Answer class.
 */
export class Answer {

  /**
   * Answer identifier.
   */
  id: string;

  /**
   * Answer content.
   */
  content: string;

  /**
   * Answer user identifier.
   */
  userId: string;

  /**
   * Answer reactions;
   */
  reactions: Array<AnswerReaction>;

  /**
   * Defines whether the answer is the best.
   */
  bestAnswer: boolean;

  /**
   * Initializes a new instance of the Answer class.
   * @param id Answer identifier.
   * @param content Answer content.
   * @param userId Answer user identifier.
   * @param reactions Answer reactions.
   * @param bestAnswer Define whether the answer is the best.
   */
  constructor(id: string, content: string, userId: string, reactions: Array<AnswerReaction>, bestAnswer: boolean) {
    this.id = id;
    this.content = content;
    this.userId = userId;
    this.reactions = reactions;
    this.bestAnswer = bestAnswer;
  }
}
