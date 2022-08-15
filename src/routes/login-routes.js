import createHttpError from 'http-errors'

import { toAsyncHandle } from '../lib/to-async-handle'
import * as loginDomain from '../domain/login'

export const createLoginRoutesFactory = ({ routes, repositories }) => {
  routes.post(
    '/login',
    toAsyncHandle(async (req, res) => {
      const { login, password } = req.body

      const userLogged = await loginDomain.createSection({ login, password }, repositories)
      if (!userLogged) throw createHttpError(404, 'User or password is wrong')

      return res.send(userLogged)
    })
  )
}

