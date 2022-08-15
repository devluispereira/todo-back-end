export const findByName = async ({ login }) => {
  const userLogin = process.env.ACESS_CONTROL_LOGIN
  const password = process.env.ACESS_CONTROL_PASSWORD

  if (login !== userLogin) return null

  const user = {
    login,
    password
  }

  return user
}

