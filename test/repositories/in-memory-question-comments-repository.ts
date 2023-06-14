import { QuestionCommentsRepository } from '@/domain/forum/application/repositories/question-comments-repository'
import { QuestionComment } from '@/domain/forum/interprise/entities/question-comment'

export class InMemoryQuestionCommentsRepository
  implements QuestionCommentsRepository
{
  public items: QuestionComment[] = []

  async findById(id: string) {
    const questionCommen = this.items.find((item) => item.id.toSring() === id)

    if (!questionCommen) throw new Error('not found.')

    return questionCommen
  }

  async create(questionComment: QuestionComment) {
    this.items.push(questionComment)
  }

  async delete(questionComment: QuestionComment) {
    const itemIndex = this.items.findIndex(
      (item) => item.id === questionComment.id,
    )

    this.items.splice(itemIndex, 1)
  }
}
