import { AnswerComment } from '../../interprise/entities/answer-comment'

export interface AnswerCommentsRepository {
  create: (answerComment: AnswerComment) => Promise<void>
}
