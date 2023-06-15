import { AnswerComment } from '../../interprise/entities/answer-comment'

export interface AnswerCommentsRepository {
  findById: (id: string) => Promise<AnswerComment | null>
  create: (answerComment: AnswerComment) => Promise<void>
  delete: (answerComment: AnswerComment) => Promise<void>
}
