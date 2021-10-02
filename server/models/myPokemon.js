import { Model } from 'sequelize';

module.exports = (sequelize, DataTypes) => {
  class myPokemons extends Model {
    static associate(models) {
    }
  }
  myPokemons.init({
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      validate: {
        isInt: true,
        notNull: true,
        notEmpty: true,
      },
    },
    name: {
      primaryKey: false,
      type: DataTypes.STRING,
      validate: {
        min: 3,
        notNull: true,
        notEmpty: true,
      },
    },
  }, {
    sequelize,
    modelName: 'myPokemons',
    timestamps: false,
  });
  return myPokemons;
};
