import { AnserRepository } from '@/domain/forum/application/repositories/answer-repository'
import { Answer } from '@/domain/forum/interprise/entities/answer'

export class InMemoryAnswersRepository implements AnserRepository {
  public items: Answer[] = []

  async create(answer: Answer): Promise<void> {
    this.items.push(answer)
  }
}
