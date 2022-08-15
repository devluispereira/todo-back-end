module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('cards', {
      id: {
        allowNull: false,
        defaultValue: DataTypes.UUIDV4,
        unique: true,
        primaryKey: true,
        type: DataTypes.STRING
      },
      titulo: {
        allowNull: false,
        type: DataTypes.STRING
      },
      conteudo: {
        allowNull: false,
        type: DataTypes.STRING
      },
      lista: {
        allowNull: false,
        type: DataTypes.STRING
      },
      created_at: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updated_at: {
        allowNull: false,
        type: DataTypes.DATE
      }
    })
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('cards')
  }
}
