import { Router } from 'express'

import repositories from '../repositories'

import { cardRoutesFactory } from './card-routes'
import { createLoginRoutesFactory } from './login-routes'

const routes = Router({ mergeParams: true })

createLoginRoutesFactory({ routes, repositories })
cardRoutesFactory({ routes, repositories })

export { routes }

