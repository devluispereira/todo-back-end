import createHttpError from 'http-errors'

export const deleteCardById = async ({ id }, repositories) => {
  if (!id) throw createHttpError(404, 'Id is necessary')

  const card = await repositories.card.findById({ id })

  if (!card) throw createHttpError(404, 'Card not exist')

  return await repositories.card.deleteCard({ id })
}
