import { Entity } from '@/core/entities/entity'
import { UniqueEntityId } from '@/core/entities/unique-entity-id'
import { Optional } from '@/core/types/optional'

export interface AnswerProps {
  authorId: UniqueEntityId
  questionId: UniqueEntityId
  content: string
  createdAd: Date
  updatedAt?: Date
}

export class Answer extends Entity<AnswerProps> {
  get authorId() {
    return this.props.authorId
  }

  get questionId() {
    return this.props.questionId
  }

  get content() {
    return this.props.content
  }

  set content(content: string) {
    this.props.content = content
    this.touch()
  }

  get createdAd() {
    return this.props.createdAd
  }

  get updatedAt() {
    return this.props.updatedAt
  }

  protected touch() {
    this.props.updatedAt = new Date()
  }

  get excerpt() {
    return this.content.substring(0, 120).trimEnd().concat('...')
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
