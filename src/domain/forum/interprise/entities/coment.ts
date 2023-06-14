import { Entity } from '@/core/entities/entity'
import { UniqueEntityId } from '@/core/entities/unique-entity-id'

export interface ComentProps {
  authorId: UniqueEntityId
  content: string
  createdAd: Date
  updatedAt?: Date
}

export abstract class Coment<Props extends ComentProps> extends Entity<Props> {
  get authorId() {
    return this.props.authorId
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
}
