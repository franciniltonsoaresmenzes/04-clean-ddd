import { Answer } from '../../interprise/entities/answer'

export interface AnserRepository {
  findById: (id: string) => Promise<Answer | null>
  create: (answer: Answer) => Promise<void>
  delete: (answer: Answer) => Promise<void>
}
