import jwt from 'jsonwebtoken'

export const authMiddleware = async (req, res, next) => {
  const authHeader = req.headers.authorization

  if (!authHeader) {
    return res.status(401).json({ error: 'Token not provided' })
  }

  const [, token] = authHeader.split(' ')

  try {
    jwt.verify(token, process.env.JWT_SECRET)

    return next()
  } catch (err) {
    return res.status(401).json({ message: 'Token invalid' })
  }
}
