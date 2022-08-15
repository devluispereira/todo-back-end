import Cards from '../../clients/db/models/card'

export const createCard = async (card) => {
  return await Cards.create(card)
}
