import { findAllCards } from '../find-all-cards'

const repositoryStub = {
  card: {
    findAllCards: jest.fn()
  }
}

describe('find-all-cards', () => {
  describe('when the find all cards is called', () => {
    it('should call repository with params', async () => {
      const filters = {
        page: 1,
        perPage: 20,
        lista: 'Teste'
      }
      await findAllCards(filters, repositoryStub)

      expect(repositoryStub.card.findAllCards).toHaveBeenCalledWith(filters)
    })
  })
})
