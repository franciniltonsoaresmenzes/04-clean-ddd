import { AnswerComment } from '../../interprise/entities/answer-comment'
import { AnswerCommentsRepository } from '../repositories/answer-comment-repository'

interface FetchAnswerCommentsUseCaseResquest {
  page: number
  answersId: string
}

interface FetchAnswerCommentsUseCaseResponse {
  answerComments: AnswerComment[]
}

export class FetchAnswerCommentsUseCase {
  constructor(private answerCommentsRepository: AnswerCommentsRepository) {}

  async execute({
    page,
    answersId,
  }: FetchAnswerCommentsUseCaseResquest): Promise<FetchAnswerCommentsUseCaseResponse> {
    const answerComments =
      await this.answerCommentsRepository.findManyByAnswerId(answersId, {
        page,
      })

    return { answerComments }
  }
}
