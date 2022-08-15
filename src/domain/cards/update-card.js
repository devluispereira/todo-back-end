import createHttpError from 'http-errors'

export const updateCard = async ({
  id,
  titulo,
  conteudo,
  lista
}, repositories) => {
  if (!id) throw createHttpError(404, 'Id is necessary')

  const card = await repositories.card.findById({ id })

  if (!card) throw createHttpError(404, 'Card is not exist')

  return await repositories.card.updateCard({
    id,
    titulo,
    conteudo,
    lista
  })
}
