import { expect, it } from 'vitest'
import { AnswerQuestionUseCase } from './answer-question'
import { AnserRepository } from '../../repositories/answer-repository'
import { Answer } from '../entities/answer'

const fakeAnswerRepository: AnserRepository = {
  create: async (answer: Answer) => {},
}

it('create an answer', async () => {
  const answerQuestion = new AnswerQuestionUseCase(fakeAnswerRepository)

  const answer = await answerQuestion.execute({
    instructorId: '1',
    questionId: '1',
    content: 'Nova resposta',
  })

  expect(answer.content).toEqual('Nova resposta')
})
