import { Answer } from '../entities/answer'

interface AnswerQuestionUseCaseResquest {
  instructorId: string
  questionId: string
  content: string
}

export class AnswerQuestionUseCase {
  execute({
    instructorId,
    questionId,
    content,
  }: AnswerQuestionUseCaseResquest) {
    const answer = new Answer({
      content,
      authorId: instructorId,
      questionId,
    })

    return answer
  }
}
