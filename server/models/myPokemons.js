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
      allowNull: false,
      validate: {
        isInt: true,
        notEmpty: true,
      },
    },
    name: {
      primaryKey: false,
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        min: 3,
        notEmpty: true,
      },
    },
    url: {
      primaryKey: false,
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        min: 33,
        isUrl: true,
        notEmpty: true,
      },
    },
    rename_ctr: {
      primaryKey: false,
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isInt: true,
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
