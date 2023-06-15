import { UniqueEntityId } from '@/core/entities/unique-entity-id'
import { InMemoryAnswerCommentsRepository } from 'test/repositories/in-memory-answer-comments-repository'
import { DeleteAnswerCommentUseCase } from './delete-answer-comment'
import { makeAnswerComment } from 'test/factories/make-answer-comment'

let inMemoryAnswerCommentRepository: InMemoryAnswerCommentsRepository
let sut: DeleteAnswerCommentUseCase

describe('Delete Answer Comment', () => {
  beforeEach(() => {
    inMemoryAnswerCommentRepository = new InMemoryAnswerCommentsRepository()
    sut = new DeleteAnswerCommentUseCase(inMemoryAnswerCommentRepository)
  })

  it('should be able to delete answer comment', async () => {
    const answerComment = makeAnswerComment()

    await inMemoryAnswerCommentRepository.create(answerComment)

    await sut.execute({
      authorId: answerComment.authorId.toSring(),
      answerCommentId: answerComment.id.toSring(),
    })

    expect(inMemoryAnswerCommentRepository.items).toHaveLength(0)
  })

  it('should not be able to delete another user answer comment', async () => {
    const answerComment = makeAnswerComment({
      authorId: new UniqueEntityId('author-1'),
    })

    await inMemoryAnswerCommentRepository.create(answerComment)

    await expect(() =>
      sut.execute({
        authorId: 'author-error',
        answerCommentId: answerComment.id.toSring(),
      }),
    ).rejects.toBeInstanceOf(Error)
  })
})
