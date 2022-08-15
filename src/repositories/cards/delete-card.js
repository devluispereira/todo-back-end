import Cards from '../../clients/db/models/card'

export const deleteCard = async ({ id }) => {
  return await Cards.destroy({ where: { id } })
}
