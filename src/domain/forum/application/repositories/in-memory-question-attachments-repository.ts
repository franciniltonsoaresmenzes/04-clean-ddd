import { QuestionAttachment } from '../../interprise/entities/question-attachment'
import { QuestionAttachmentsRepository } from './question-attachments-repository'

export class InMemoryQuestionAttachmentsRepository
  implements QuestionAttachmentsRepository
{
  public items: QuestionAttachment[] = []

  async findManyByQuestionId(questionId: string) {
    const questionAttachments = this.items.filter(
      (item) => item.questionId.toSring() === questionId,
    )

    return questionAttachments
  }
}
