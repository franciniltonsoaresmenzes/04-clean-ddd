import { UniqueEntityId } from '@/core/entities/unique-entity-id'
import { Optional } from '@/core/types/optional'
import { Comment, CommentProps } from './comment'

export interface AnswerComentProps extends CommentProps {
  answerId: UniqueEntityId
}

export class AnswerComment extends Comment<AnswerComentProps> {
  get answerId() {
    return this.props.answerId
  }

  static create(
    props: Optional<AnswerComentProps, 'createdAd'>,
    id?: UniqueEntityId,
  ) {
    const answerComent = new AnswerComment(
      {
        ...props,
        createdAd: props.createdAd ?? new Date(),
      },
      id,
    )

    return answerComent
  }
}
