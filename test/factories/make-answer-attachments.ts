import { UniqueEntityId } from '@/core/entities/unique-entity-id'
import {
  AnswerAttachmentProps,
  AnswerAttachments,
} from '@/domain/forum/interprise/entities/answer-attachment'

export function makeAnswerAttachments(
  override: Partial<AnswerAttachmentProps> = {},
  id?: UniqueEntityId,
) {
  const answerAttachment = AnswerAttachments.create(
    {
      answerId: new UniqueEntityId(),
      attachmentId: new UniqueEntityId(),
      ...override,
    },
    id,
  )
  return answerAttachment
}
