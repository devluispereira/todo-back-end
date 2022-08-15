import { updateCard } from '../update-card'

const repositoryStub = {
  card: {
    findById: jest.fn(),
    updateCard: jest.fn()
  }
}
const card = {
  titulo: 'teste',
  lista: 'teste',
  conteudo: 'teste'
}

describe('update-card.js', () => {
  describe('when the update card function is called', () => {
    describe('and the id parameter is not passed', () => {
      it('should return error', async () => {
        try {
          await updateCard(card, repositoryStub)
        } catch (error) {
          expect(error.status).toBe(404)
          expect(error.message).toBe('Id is necessary')
        }
      })
      it('should not search for the card by id or update it', async () => {
        try {
          await updateCard({}, repositoryStub)
        } catch (error) {
          expect(repositoryStub.card.findById).not.toHaveBeenCalled()
          expect(repositoryStub.card.updateCard).not.toHaveBeenCalled()
        }
      })
    })
    describe('and the card does not exist', () => {
      beforeEach(() => {
        jest.spyOn(repositoryStub.card, 'findById').mockReturnValue(null)
      })
      afterEach(() => {
        jest.clearAllMocks()
      })

      it('should return error', async () => {
        try {
          await updateCard({ id: 10, ...card }, repositoryStub)
        } catch (error) {
          expect(error.status).toBe(404)
          expect(error.message).toBe('Card is not exist')
        }
      })

      it('should not call the function to update the card', async () => {
        try {
          await updateCard({ id: 10, ...card }, repositoryStub)
        } catch (error) {
          expect(repositoryStub.card.findById).toHaveBeenCalledWith({ id: 10 })
          expect(repositoryStub.card.updateCard).not.toHaveBeenCalled()
        }
      })
    })

    describe('and the card is update with success', () => {
      beforeEach(() => {
        jest.spyOn(repositoryStub.card, 'findById').mockReturnValue({ id: 10, titulo: 'teste' })
        jest.spyOn(repositoryStub.card, 'updateCard').mockReturnValue({ id: 10, ...card })
      })
      afterEach(() => {
        jest.clearAllMocks()
      })

      it('should call the repository with the parameters', async () => {
        await updateCard({ id: 10, ...card }, repositoryStub)

        expect(repositoryStub.card.findById).toHaveBeenCalledWith({ id: 10 })
        expect(repositoryStub.card.updateCard).toHaveBeenCalledWith({ id: 10, ...card })
      })

      it('should return card update', async () => {
        const response = await updateCard({ id: 10, ...card }, repositoryStub)

        expect(response).toMatchObject({ id: 10, ...card })
      })
    })
  })
})

