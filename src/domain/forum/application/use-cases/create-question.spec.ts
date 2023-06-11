import { AnswerQuestionUseCase } from './answer-question'
import { AnserRepository } from '../repositories/answer-repository'
import { Answer } from '../../interprise/entities/answer'
import { QuestionsRepository } from '../repositories/questions-repository'
import { Question } from '../../interprise/entities/question'
import { CreateQuestionUseCase } from './create-question'

const fakeQuestionRepository: QuestionsRepository = {
  create: async (question: Question) => {},
}

it('create a question', async () => {
  const createQuestion = new CreateQuestionUseCase(fakeQuestionRepository)

  const { question } = await createQuestion.execute({
    authorId: '1',
    title: 'Nova Pergunta',
    content: 'Conteúdo da pergunta',
  })

  expect(question.id).toBeTruthy()
})
