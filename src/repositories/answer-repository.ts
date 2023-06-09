import { Answer } from '../domain/entities/answer'

export interface AnserRepository {
  create: (answer: Answer) => Promise<void>
}
