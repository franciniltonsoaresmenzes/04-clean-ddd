import { randomUUID } from 'node:crypto'

interface QuestionProps {
  title: string
  content: string
  authorId: string
}

export class Question {
  public id: string
  public authorId: string
  public title: string
  public content: string

  constructor({ title, content, authorId }: QuestionProps, id?: string) {
    this.title = title
    this.authorId = authorId
    this.content = content
    this.id = id ?? randomUUID()
  }
}
