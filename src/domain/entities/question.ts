import { randomUUID } from 'node:crypto'
import { Slug } from './value-objects/slug'

interface QuestionProps {
  title: string
  content: string
  slug: Slug
  authorId: string
}

export class Question {
  public id: string
  public authorId: string
  public slug: Slug
  public title: string
  public content: string

  constructor({ title, content, authorId, slug }: QuestionProps, id?: string) {
    this.title = title
    this.authorId = authorId
    this.slug = slug
    this.content = content
    this.id = id ?? randomUUID()
  }
}
