import moment from 'moment'

const METHODS_LOGGER = ['PUT', 'PATCH', 'DELETE']

export const logger = (req, _, next) => {
  if (METHODS_LOGGER.includes(req.method)) {
    const { id } = req.params

    const { titulo } = req.body

    console.log(`Logger: ${moment().format('d/MM/YY - HH:mm:ss')} - Card ${id} - ${titulo} - Method: ${req.method} `)
  }
  next()
}
