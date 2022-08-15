import { deleteCardById } from '../delete-card-by-id'

const repositoryStub = {
  card: {
    findById: jest.fn(),
    deleteCard: jest.fn()
  }
}

describe('delete-card.js', () => {
  describe('when the delete card function is called', () => {
    describe('and the id parameter is not passed', () => {
      it('should return error', async () => {
        try {
          await deleteCardById({}, repositoryStub)
        } catch (error) {
          expect(error.status).toBe(404)
          expect(error.message).toBe('Id is necessary')
        }
      })
      it('should not search for the card by id or delete it', async () => {
        try {
          await deleteCardById({}, repositoryStub)
        } catch (error) {
          expect(repositoryStub.card.findById).not.toHaveBeenCalled()
          expect(repositoryStub.card.deleteCard).not.toHaveBeenCalled()
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
          await deleteCardById({ id: 10 }, repositoryStub)
        } catch (error) {
          expect(error.status).toBe(404)
          expect(error.message).toBe('Card not exist')
        }
      })

      it('should not call the function to delete the card', async () => {
        try {
          await deleteCardById({ id: 10 }, repositoryStub)
        } catch (error) {
          expect(repositoryStub.card.findById).toHaveBeenCalledWith({ id: 10 })
          expect(repositoryStub.card.deleteCard).not.toHaveBeenCalled()
        }
      })
    })

    describe('and the card is deleted with success', () => {
      beforeEach(() => {
        jest.spyOn(repositoryStub.card, 'findById').mockReturnValue({ id: 10, titulo: 'teste' })
      })
      afterEach(() => {
        jest.clearAllMocks()
      })

      it('should call the repository with the parameters', async () => {
        await deleteCardById({ id: 10 }, repositoryStub)

        expect(repositoryStub.card.findById).toHaveBeenCalledWith({ id: 10 })
        expect(repositoryStub.card.deleteCard).toHaveBeenCalledWith({ id: 10 })
      })
    })
  })
})
