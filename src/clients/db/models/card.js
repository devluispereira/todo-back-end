import { Model, DataTypes } from 'sequelize'

class Card extends Model {
  static init(sequelize) {
    super.init(
      {
        titulo: DataTypes.STRING,
        conteudo: DataTypes.STRING,
        lista: DataTypes.STRING
      },
      {
        sequelize,
        modelName: 'card'
      }
    )
    return this
  }
}

export default Card
