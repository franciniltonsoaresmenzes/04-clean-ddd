import { NotificationRepository } from '@/domain/notification/application/repositories/notification-repository'
import { Notification } from '@/domain/notification/interprise/entities/notification'

export class InMemoryNotificationRepository implements NotificationRepository {
  public items: Notification[] = []

  async create(notification: Notification) {
    this.items.push(notification)
  }
}
