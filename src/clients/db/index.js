import Sequelize from 'sequelize'

import databaseConfig from '../../config/database'

import Card from './models/card'

const models = [Card]

class Database {
  constructor() {
    this.init()
  }

  async syncTables() {
    await this.connection.sync()
  }

  async init() {
    this.connection = new Sequelize(databaseConfig)

    models.map((model) =>
      model.init(this.connection))

    await this.syncTables()
  }
}

export default new Database()
