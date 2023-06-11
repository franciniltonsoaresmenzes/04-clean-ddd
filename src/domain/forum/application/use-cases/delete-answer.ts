import { AnserRepository } from '../repositories/answer-repository'

interface DeleteAnswerUseCaseResquest {
  authorId: string
  answerId: string
}

interface DeleteAnswerUseCaseResponse {}

export class DeleteAnswerUseCase {
  constructor(private answerRepository: AnserRepository) {}

  async execute({
    answerId,
    authorId,
  }: DeleteAnswerUseCaseResquest): Promise<DeleteAnswerUseCaseResponse> {
    const answer = await this.answerRepository.findById(answerId)

    if (!answer) throw new Error('Answer not found.')

    if (authorId !== answer.authorId.toSring()) {
      throw new Error('Not allowed.')
    }

    await this.answerRepository.delete(answer)

    return {}
  }
}
