/**
 * Answer reaction class.
 */
export class AnswerReaction {

  /**
   * Reaction identifier.
   */
  reactionId: string;

  /**
   * User identifier.
   */
  userId: string;

  /**
   * Initializes a new instance of the AnswerReaction class.
   * @param reactionId Reaction identifier.
   * @param userId User identifier.
   */
  constructor(reactionId: string, userId: string) {
    this.reactionId = reactionId;
    this.userId = userId;
  }
}
