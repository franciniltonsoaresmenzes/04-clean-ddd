import { AnserRepository } from '@/domain/forum/application/repositories/answer-repository'
import { Answer } from '@/domain/forum/interprise/entities/answer'

export class InMemoryAnswersRepository implements AnserRepository {
  public items: Answer[] = []

  async findById(id: string) {
    const answer = this.items.find((item) => item.id.toSring() === id)

    if (!answer) return null

    return answer
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
