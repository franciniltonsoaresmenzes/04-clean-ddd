import { UniqueEntityId } from '@/core/entities/unique-entity-id'
import { Answer } from '../../interprise/entities/answer'
import { AnserRepository } from '../repositories/answer-repository'

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
    const answer = Answer.create({
      content,
      authorId: new UniqueEntityId(instructorId),
      questionId: new UniqueEntityId(questionId),
    })

    await this.answerRepository.create(answer)

    return answer
  }
}
