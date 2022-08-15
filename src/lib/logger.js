const METHODS_LOGGER = ['PUT', 'PATCH', 'DELETE']

export const logger = (req, _, next) => {
  if (METHODS_LOGGER.includes(req.method)) {
    const now = new Date()
    const { id } = req.params

    const { title } = req.body

    console.log(`Logger: ${now.toLocaleString()} - Card ${id} - ${title} - Method: ${req.method} `)
  }
  next()
}
