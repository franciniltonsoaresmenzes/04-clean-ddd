import { UniqueEntityId } from '@/core/entities/unique-entity-id'
import { Optional } from '@/core/types/optional'
import { Coment, ComentProps } from './coment'

export interface AnswerComentProps extends ComentProps {
  answerId: UniqueEntityId
}

export class AnswerComent extends Coment<AnswerComentProps> {
  get answerId() {
    return this.props.answerId
  }

  static create(
    props: Optional<AnswerComentProps, 'createdAd'>,
    id?: UniqueEntityId,
  ) {
    const answerComent = new AnswerComent(
      {
        ...props,
        createdAd: props.createdAd ?? new Date(),
      },
      id,
    )

    return answerComent
  }
}
