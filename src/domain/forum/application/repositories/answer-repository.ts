import { Answer } from '../../interprise/entities/answer'

export interface AnserRepository {
  findById: (id: string) => Promise<Answer | null>
  save: (answer: Answer) => Promise<void>
  create: (answer: Answer) => Promise<void>
  delete: (answer: Answer) => Promise<void>
}
