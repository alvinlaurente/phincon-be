module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('myPokemons', {
      id: {
        allowNull: false,
        primaryKey: true,
        unique: true,
        type: Sequelize.INTEGER,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('myPokemons');
  },
};
