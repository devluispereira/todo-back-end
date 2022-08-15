module.exports = {
  dialect: 'sqlite',
  storage: './ada.sqlite',
  logging: process.env.NODE_ENV === 'production' ? false : console.log,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true
  }
}
