import { UniqueEntityId } from '@/core/entities/unique-entity-id'
import {
  QuestionComentProps,
  QuestionComment,
} from '@/domain/forum/interprise/entities/question-comment'
import { faker } from '@faker-js/faker'

export function makeQuestionComment(
  override: Partial<QuestionComentProps> = {},
  id?: UniqueEntityId,
) {
  const questionComment = QuestionComment.create(
    {
      authorId: new UniqueEntityId(),
      content: faker.lorem.text(),
      questonId: new UniqueEntityId(),
      ...override,
    },
    id,
  )

  return questionComment
}
