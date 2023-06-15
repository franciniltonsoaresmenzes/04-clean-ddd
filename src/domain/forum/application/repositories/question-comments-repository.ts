import { PaginationParams } from '@/core/repository/pagination-params'
import { QuestionComment } from '../../interprise/entities/question-comment'

export interface QuestionCommentsRepository {
  findById: (id: string) => Promise<QuestionComment | null>
  findManyByQuestionId: (
    questionId: string,
    params: PaginationParams,
  ) => Promise<QuestionComment[]>
  create: (questionComment: QuestionComment) => Promise<void>
  delete: (questionComment: QuestionComment) => Promise<void>
}
