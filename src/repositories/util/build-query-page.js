export const buildQueryPage = ({ page, perPage, lista }) => {
  const offset = +(page * perPage)
  const limit = +perPage

  return {
    ...lista && { where: { lista } },
    ...offset && { offset },
    ...limit && { limit }
  }
}
