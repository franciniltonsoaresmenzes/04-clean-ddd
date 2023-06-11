import { UniqueEntityId } from '@/core/entities/unique-entity-id'
import {
  Question,
  QuestionProps,
} from '@/domain/forum/interprise/entities/question'
import { Slug } from '@/domain/forum/interprise/entities/value-objects/slug'

export function makeQuestion(override: Partial<QuestionProps> = {}) {
  const question = Question.create({
    authorId: new UniqueEntityId(),
    title: 'Example Question',
    slug: Slug.create('example-question'),
    content: 'Example content',
    ...override,
  })

  return question
}
