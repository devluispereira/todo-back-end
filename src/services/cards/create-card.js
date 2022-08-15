import crypto from 'crypto'

import createHttpError from 'http-errors'

export const validateCardCreate = (cards) => {
  const validate = true
  Object.keys(cards).forEach((cardKey) => {
    if (!cards[cardKey]) throw createHttpError(400, `${cardKey} fiels is necessary`)
  })

  return validate
}

export const createCard = async ({ titulo, conteudo, lista }, repositories) => {
  validateCardCreate({ titulo, conteudo, lista })

  return await repositories.card.createCard({
    id: crypto.randomUUID(),
    titulo,
    conteudo,
    lista
  })
}
