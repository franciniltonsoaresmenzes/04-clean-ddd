import { Entity } from '@/core/entities/entity'
import { UniqueEntityId } from '@/core/entities/unique-entity-id'
import { Optional } from '@/core/types/optional'

export interface AnswerComentProps {
  authorId: UniqueEntityId
  answerId: UniqueEntityId
  content: string
  createdAd: Date
  updatedAt?: Date
}

export class AnswerComent extends Entity<AnswerComentProps> {
  get authorId() {
    return this.props.authorId
  }

  get answerId() {
    return this.props.answerId
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

  static create(
    props: Optional<AnswerComentProps, 'createdAd'>,
    id?: UniqueEntityId,
  ) {
    const answerComent = new AnswerComent(
      {
        ...props,
        createdAd: props.createdAd ?? new Date(),
      },
      id,
    )

    return answerComent
  }
}
