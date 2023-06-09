import { Entity } from '../../core/entities/entity'
import { UniqueEntityId } from '../../core/entities/unique-entity-id'
import { Optional } from '../../core/types/optional'
import { Slug } from './value-objects/slug'

interface QuestionProps {
  authorId: UniqueEntityId
  bestAnwserId?: UniqueEntityId
  title: string
  content: string
  slug: Slug
  createdAd: Date
  updatedAt?: Date
}

export class Question extends Entity<QuestionProps> {
  static create(
    props: Optional<QuestionProps, 'createdAd'>,
    id?: UniqueEntityId,
  ) {
    const question = new Question(
      {
        ...props,
        createdAd: new Date(),
      },
      id,
    )

    return question
  }
}
