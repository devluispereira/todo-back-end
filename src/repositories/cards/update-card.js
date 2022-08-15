import Cards from '../../clients/db/models/card'

export const updateCard = async ({
  id,
  titulo,
  conteudo,
  lista
} = {}) => await Cards.update({ titulo, conteudo, lista }, { where: { id } })

