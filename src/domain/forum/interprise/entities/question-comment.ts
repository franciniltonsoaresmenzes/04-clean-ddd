import { UniqueEntityId } from '@/core/entities/unique-entity-id'
import { Optional } from '@/core/types/optional'
import { Comment, CommentProps } from './comment'

export interface QuestionComentProps extends CommentProps {
  questonId: UniqueEntityId
}

export class QuestionComment extends Comment<QuestionComentProps> {
  get questonId() {
    return this.props.questonId
  }

  static create(
    props: Optional<QuestionComentProps, 'createdAd'>,
    id?: UniqueEntityId,
  ) {
    const questionComent = new QuestionComment(
      {
        ...props,
        createdAd: props.createdAd ?? new Date(),
      },
      id,
    )

    return questionComent
  }
}
