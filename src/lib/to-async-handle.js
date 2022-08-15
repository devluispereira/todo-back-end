export const toAsyncHandle = (handler) => (req, res, next) => {
  try {
    handler(req, res, next)
      .then(() => {
        if (!res.headersSent) {
          next()
        }
      })
      .catch((error) => {
        next(error)
      })
  } catch (error) {
    next(error)
  }
}
