import jwt from 'jsonwebtoken'

import * as userDomain from '../user'

export const createSection = async (
  {
    login,
    senha
  },
  repositories
) => {
  const user = await userDomain.findUserByLogin({ login }, repositories)

  if (!user) {
    return null
  }

  const isCorretPassword = await userDomain.checkPassword(senha, user.password)

  if (!isCorretPassword) {
    return null
  }

  const { id } = user

  const token = jwt.sign({ id, login }, process.env.JWT_SECRET, {
    expiresIn: process.env.EXPIRE_JWT
  })

  return {
    token
  }
}
