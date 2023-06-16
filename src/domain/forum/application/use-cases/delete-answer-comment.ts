import { Either, left, right } from '@/core/either'
import { AnswerCommentsRepository } from '../repositories/answer-comment-repository'

interface DeleteAnswerCommentUseCaseResquest {
  authorId: string
  answerCommentId: string
}

type DeleteAnswerCommentUseCaseResponse = Either<string, {}>

export class DeleteAnswerCommentUseCase {
  constructor(private answerCommentRepository: AnswerCommentsRepository) {}

  async execute({
    authorId,
    answerCommentId,
  }: DeleteAnswerCommentUseCaseResquest): Promise<DeleteAnswerCommentUseCaseResponse> {
    const answerComment = await this.answerCommentRepository.findById(
      answerCommentId,
    )

    if (!answerComment) return left('Answer comment not found.')

    if (authorId !== answerComment.authorId.toSring()) {
      return left('Not allowed.')
    }

    await this.answerCommentRepository.delete(answerComment)

    return right({})
  }
}
