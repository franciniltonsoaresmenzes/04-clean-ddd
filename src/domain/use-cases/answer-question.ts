import { AnserRepository } from '../../repositories/answer-repository'
import { Answer } from '../entities/answer'

interface AnswerQuestionUseCaseResquest {
  instructorId: string
  questionId: string
  content: string
}

export class AnswerQuestionUseCase {
  constructor(private answerRepository: AnserRepository) {}

  async execute({
    instructorId,
    questionId,
    content,
  }: AnswerQuestionUseCaseResquest) {
    const answer = new Answer({
      content,
      authorId: instructorId,
      questionId,
    })

    await this.answerRepository.create(answer)

    return answer
  }
}
