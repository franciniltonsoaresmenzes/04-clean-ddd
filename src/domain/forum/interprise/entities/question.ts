import dayjs from 'dayjs'
import { Entity } from '@/core/entities/entity'
import { UniqueEntityId } from '@/core/entities/unique-entity-id'
import { Optional } from '@/core/types/optional'
import { Slug } from './value-objects/slug'
import { title } from 'process'

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
  get authorId() {
    return this.props.authorId
  }

  get bestAnwserId() {
    return this.props.bestAnwserId
  }

  set bestAnwserId(bestAnwserId: UniqueEntityId | undefined) {
    this.props.bestAnwserId = bestAnwserId
  }

  get slug() {
    return this.props.title
  }

  get title() {
    return this.props.title
  }

  set title(title: string) {
    this.props.title = title
    this.props.slug = Slug.createFromText(title)
    this.touch()
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

  get isNew(): boolean {
    return dayjs().diff(this.createdAd, 'day') <= 3
  }

  protected touch() {
    this.props.updatedAt = new Date()
  }

  get excerpt() {
    return this.content.substring(0, 120).trimEnd().concat('...')
  }

  static create(
    props: Optional<QuestionProps, 'createdAd' | 'slug'>,
    id?: UniqueEntityId,
  ) {
    const question = new Question(
      {
        ...props,
        slug: props.slug ?? Slug.createFromText(title),
        createdAd: new Date(),
      },
      id,
    )

    return question
  }
}
