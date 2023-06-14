import { UniqueEntityId } from '@/core/entities/unique-entity-id'
import { Optional } from '@/core/types/optional'
import { Coment, ComentProps } from './coment'

export interface QuestionComentProps extends ComentProps {
  questonId: UniqueEntityId
}

export class QuestionComent extends Coment<QuestionComentProps> {
  get questonId() {
    return this.props.questonId
  }

  static create(
    props: Optional<QuestionComentProps, 'createdAd'>,
    id?: UniqueEntityId,
  ) {
    const questionComent = new QuestionComent(
      {
        ...props,
        createdAd: props.createdAd ?? new Date(),
      },
      id,
    )

    return questionComent
  }
}
