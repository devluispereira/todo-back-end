import Cards from '../../clients/db/models/card'
import { buildQueryPage } from '../util/build-query-page'

export const findAllCards = async ({ page, perPage, lista }) => {
  const filters = buildQueryPage({ page, perPage, lista })

  return await Cards.findAll(filters)
}
