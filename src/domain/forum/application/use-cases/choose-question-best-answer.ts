import { Question } from '../../interprise/entities/question'
import { AnswerRepository } from '../repositories/answer-repository'
import { QuestionsRepository } from '../repositories/questions-repository'

interface ChooseQuestionBestAnswerUseCaseResquest {
  answerId: string
  authorId: string
}

interface ChooseQuestionBestAnswerUseCaseResponse {
  question: Question
}

export class ChooseQuestionBestAnswerUseCase {
  constructor(
    private answerRepository: AnswerRepository,
    private questionsRepository: QuestionsRepository,
  ) {}

  async execute({
    answerId,
    authorId,
  }: ChooseQuestionBestAnswerUseCaseResquest): Promise<ChooseQuestionBestAnswerUseCaseResponse> {
    const answer = await this.answerRepository.findById(answerId)

    if (!answer) throw new Error('Answer not found.')

    const question = await this.questionsRepository.findById(
      answer.questionId.toSring(),
    )

    if (!question) throw new Error('Question not found.')

    if (authorId !== question.authorId.toSring())
      throw new Error('Not allowed.')

    question.bestAnwserId = answer.id

    await this.questionsRepository.save(question)

    return { question }
  }
}
