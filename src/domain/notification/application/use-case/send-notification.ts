import { Either, right } from '@/core/either'
import { Notification } from '../../interprise/entities/notification'
import { NotificationRepository } from '../repositories/notification-repository'
import { UniqueEntityId } from '@/core/entities/unique-entity-id'

type SendNotificationUseCaseRequest = {
  recipientId: string
  title: string
  content: string
}

type SendNotificationUseCaseResponse = Either<
  null,
  {
    notification: Notification
  }
>

export class SendNotificationUseCase {
  constructor(private notifiactionRepository: NotificationRepository) {}

  async execute({
    recipientId,
    title,
    content,
  }: SendNotificationUseCaseRequest): Promise<SendNotificationUseCaseResponse> {
    const notification = Notification.create({
      recipientId: new UniqueEntityId(recipientId),
      title,
      content,
    })

    await this.notifiactionRepository.create(notification)

    return right({
      notification,
    })
  }
}
