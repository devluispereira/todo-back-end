export const findAllCards = ({
  page,
  perPage,
  lista
}, repositories) => {
  return repositories.card.findAllCards({
    page,
    perPage,
    lista
  })
}
