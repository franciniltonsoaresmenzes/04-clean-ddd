import { AnserRepository } from '../repositories/answer-repository'

interface EditAnswerUseCaseResquest {
  authorId: string
  answerId: string
  content: string
}

interface EditAnswerUseCaseResponse {
  answer: Answer
}

export class EditAnswerUseCase {
  constructor(private answersRepository: AnserRepository) {}

  async execute({
    authorId,
    answerId,
    content,
  }: EditAnswerUseCaseResquest): Promise<EditAnswerUseCaseResponse> {
    const answer = await this.answersRepository.findById(answerId)

    if (!answer) throw new Error('Answer not found.')

    if (authorId !== answer.authorId.toSring()) {
      throw new Error('Not allowed.')
    }

    answer.content = content

    await this.answersRepository.save(answer)

    return { answer }
  }
}
