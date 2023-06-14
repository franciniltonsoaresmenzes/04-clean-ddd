import { Entity } from '@/core/entities/entity'
import { UniqueEntityId } from '@/core/entities/unique-entity-id'
import { Optional } from '@/core/types/optional'

export interface QuestionComentProps {
  authorId: UniqueEntityId
  questonId: UniqueEntityId
  content: string
  createdAd: Date
  updatedAt?: Date
}

export class QuestionComent extends Entity<QuestionComentProps> {
  get authorId() {
    return this.props.authorId
  }

  get questonId() {
    return this.props.questonId
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
    props: Optional<QuestionComentProps, 'createdAd'>,
    id?: UniqueEntityId,
  ) {
    const questionComent = new QuestionComent(
      {
        ...props,
        createdAd: props.createdAd ?? new Date(),
      },
      id,
    )

    return questionComent
  }
}
