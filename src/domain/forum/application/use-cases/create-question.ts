import { UniqueEntityId } from '@/core/entities/unique-entity-id'
import { Question } from '../../interprise/entities/question'
import { QuestionsRepository } from '../repositories/questions-repository'
import { Either, right } from '@/core/either'
import { QuestionAttachment } from '../../interprise/entities/question-attachment'

interface CreateQuestionUseCaseResquest {
  authorId: string
  title: string
  content: string
  attachmentsIds: string[]
}

type CreateQuestionUseCaseResponse = Either<
  null,
  {
    question: Question
  }
>

export class CreateQuestionUseCase {
  constructor(private questionsRepository: QuestionsRepository) {}

  async execute({
    authorId,
    title,
    content,
    attachmentsIds,
  }: CreateQuestionUseCaseResquest): Promise<CreateQuestionUseCaseResponse> {
    const question = Question.create({
      authorId: new UniqueEntityId(authorId),
      title,
      content,
    })

    const questionAttachments = attachmentsIds.map((attachmentsId) => {
      return QuestionAttachment.create({
        attachmentId: new UniqueEntityId(attachmentsId),
        questionId: question.id,
      })
    })

    question.attachments = questionAttachments

    await this.questionsRepository.create(question)

    return right({ question })
  }
}
