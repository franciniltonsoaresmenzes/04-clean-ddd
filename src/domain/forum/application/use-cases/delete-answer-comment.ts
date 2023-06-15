import { AnswerCommentsRepository } from '../repositories/answer-comment-repository'

interface DeleteAnswerCommentUseCaseResquest {
  authorId: string
  answerCommentId: string
}

interface DeleteAnswerCommentUseCaseResponse {}

export class DeleteAnswerCommentUseCase {
  constructor(private answerCommentRepository: AnswerCommentsRepository) {}

  async execute({
    authorId,
    answerCommentId,
  }: DeleteAnswerCommentUseCaseResquest): Promise<DeleteAnswerCommentUseCaseResponse> {
    const answerComment = await this.answerCommentRepository.findById(
      answerCommentId,
    )

    if (!answerComment) throw new Error('Answer comment not found.')

    if (authorId !== answerComment.authorId.toSring()) {
      throw new Error('Not allowed.')
    }

    await this.answerCommentRepository.delete(answerComment)

    return {}
  }
}
