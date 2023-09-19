import { Notification } from '../../interprise/entities/notification'

export interface NotificationRepository {
  create: (notification: Notification) => Promise<void>
}
