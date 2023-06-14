import { UniqueEntityId } from '@/core/entities/unique-entity-id'
import { AnswerRepository } from '../repositories/answer-repository'
import { AnswerCommentsRepository } from '../repositories/answer-comment-repository'
import { AnswerComment } from '../../interprise/entities/answer-comment'

interface CommentOnAnswerUseCaseResquest {
  authorId: string
  answerId: string
  content: string
}

interface CommentOnAnswerUseCaseResponse {
  answerComment: AnswerComment
}

export class CommentOnAnswerUseCase {
  constructor(
    private answersRepository: AnswerRepository,
    private answersComments: AnswerCommentsRepository,
  ) {}

  async execute({
    authorId,
    answerId,
    content,
  }: CommentOnAnswerUseCaseResquest): Promise<CommentOnAnswerUseCaseResponse> {
    const question = await this.answersRepository.findById(answerId)

    if (!question) throw new Error('Answer not found.')

    const questionComment = AnswerComment.create({
      authorId: new UniqueEntityId(authorId),
      answerId: new UniqueEntityId(answerId),
      content,
    })

    await this.answersComments.create(questionComment)

    return { answerComment: questionComment }
  }
}
