import Cards from '../../clients/db/models/card'

export const findById = async ({ id }) => {
  return await Cards.findByPk(id)
}
