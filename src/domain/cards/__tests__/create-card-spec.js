import 'jest'
import { createCard } from '../create-card'

jest.mock('crypto', () => ({
  randomUUID: () => 123
}))

const repositoryStub = {
  card: {
    createCard: jest.fn()
  }
}
describe('create-card.js', () => {
  describe('when the function create card is call', () => {
    describe('and the `title` parameter does not exist ', () => {
      it('should return an error that `titulo` is required', async () => {
        try {
          await createCard({ lista: 'teste', conteudo: 'teste' }, repositoryStub)
        } catch (err) {
          expect(err.status).toBe(400)
          expect(err.message).toBe('titulo fiels is necessary')
        }
      })
    })

    describe('and the `lista` parameter does not exist ', () => {
      it('should return an error that `lista` is required', async () => {
        try {
          await createCard({ titulo: 'teste', conteudo: 'teste' }, repositoryStub)
        } catch (err) {
          expect(err.status).toBe(400)
          expect(err.message).toBe('lista fiels is necessary')
        }
      })
    })

    describe('and the `conteudo` parameter does not exist ', () => {
      it('should return an error that `conteudo` is required', async () => {
        try {
          await createCard({ titulo: 'teste', conteudo: 'teste' }, repositoryStub)
        } catch (err) {
          expect(err.status).toBe(400)
          expect(err.message).toBe('lista fiels is necessary')
        }
      })
    })

    describe('and the card is created successfully', () => {
      it('should call the repository with the parameters', async () => {
        const card = { titulo: 'teste', conteudo: 'teste', lista: 'teste' }
        await createCard(card, repositoryStub)

        expect(repositoryStub.card.createCard).toHaveBeenCalledWith({
          id: 123,
          ...card
        })
      })
    })
  })
})
