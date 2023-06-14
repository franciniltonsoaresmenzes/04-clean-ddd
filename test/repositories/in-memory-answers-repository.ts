import { PaginationParams } from '@/core/repository/pagination-params'
import { AnswerRepository } from '@/domain/forum/application/repositories/answer-repository'
import { Answer } from '@/domain/forum/interprise/entities/answer'

export class InMemoryAnswersRepository implements AnswerRepository {
  public items: Answer[] = []

  async findById(id: string) {
    const answer = this.items.find((item) => item.id.toSring() === id)

    if (!answer) return null

    return answer
  }

  async findManyByQuestionId(questionsId: string, { page }: PaginationParams) {
    const answers = this.items
      .filter((item) => item.questionId.toSring() === questionsId)
      .slice((page - 1) * 20, page * 20)

    return answers
  }

  async save(answer: Answer) {
    const findIndex = this.items.findIndex((item) => item.id === answer.id)
    this.items[findIndex] = answer
  }

  async create(answer: Answer) {
    this.items.push(answer)
  }

  async delete(answer: Answer) {
    const answerIndex = this.items.findIndex(
      (item) => item.id.toSring() === answer.id.toSring(),
    )

    this.items.splice(answerIndex, 1)
  }
}
