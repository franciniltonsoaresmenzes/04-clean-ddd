import { Entity } from '../../core/entities/entity'
import { UniqueEntityId } from '../../core/entities/unique-entity-id'
import { Optional } from '../../core/types/optional'

interface AnswerProps {
  authorId: UniqueEntityId
  questionId: UniqueEntityId
  content: string
  createdAd: Date
  updatedAt?: Date
}

export class Answer extends Entity<AnswerProps> {
  get content() {
    return this.props.content
  }

  static create(
    props: Optional<AnswerProps, 'createdAd'>,
    id?: UniqueEntityId,
  ) {
    const answer = new Answer(
      {
        ...props,
        createdAd: new Date(),
      },
      id,
    )

    return answer
  }
}
