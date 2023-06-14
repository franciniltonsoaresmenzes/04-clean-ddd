import { QuestionCommentsRepository } from '../repositories/question-comments-repository'

interface DeleteQuestionCommentUseCaseResquest {
  authorId: string
  questionCommentId: string
}

interface DeleteQuestionCommentUseCaseResponse {}

export class DeleteQuestionCommentUseCase {
  constructor(private questionCommentRepository: QuestionCommentsRepository) {}

  async execute({
    authorId,
    questionCommentId,
  }: DeleteQuestionCommentUseCaseResquest): Promise<DeleteQuestionCommentUseCaseResponse> {
    const questionComment = await this.questionCommentRepository.findById(
      questionCommentId,
    )

    if (!questionComment) throw new Error('Question comment not found.')

    if (authorId !== questionComment.authorId.toSring()) {
      throw new Error('Not allowed.')
    }

    await this.questionCommentRepository.delete(questionComment)

    return {}
  }
}
