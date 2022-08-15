import { logger } from '../lib/logger'
import * as cardsDomain from '../domain/cards'
import { authMiddleware } from '../lib/auth-middleware'
import { toAsyncHandle } from '../lib/to-async-handle'

const cardRoutesFactory = ({ routes, repositories }) => {
  routes.get('/cards', authMiddleware, toAsyncHandle(async (req, res) => {
    const { page, perPage, lista } = req.query
    const cards = await cardsDomain.findAllCards({
      page,
      perPage,
      lista
    }, repositories)

    return res.send(cards)
  }))

  routes.post('/cards', authMiddleware, toAsyncHandle(async (req, res) => {
    const { titulo, conteudo, lista } = req.body
    const card = await cardsDomain.createCard({ titulo, conteudo, lista }, repositories)

    return res.send(card)
  }))

  routes.put('/cards/:id', authMiddleware, logger, toAsyncHandle(async (req, res) => {
    const { id } = req.params
    const { titulo, conteudo, lista } = req.body

    const card = await cardsDomain.updateCard({
      id,
      titulo,
      conteudo,
      lista
    }, repositories)

    return res.send(card)
  }))

  routes.delete('/cards/:id', authMiddleware, logger, toAsyncHandle(async (req, res) => {
    const { id } = req.params
    await cardsDomain.deleteCardById({ id }, repositories)

    return res.send({ message: `Card ${id} deleted` })
  }))
}

export { cardRoutesFactory }

