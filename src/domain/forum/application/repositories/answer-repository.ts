import { Answer } from '../entities/answer'

export interface AnserRepository {
  create: (answer: Answer) => Promise<void>
}