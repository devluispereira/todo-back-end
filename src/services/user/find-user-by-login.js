export const findUserByLogin = ({ login }, repositories) => {
  return repositories.user.findByName({ login })
}
