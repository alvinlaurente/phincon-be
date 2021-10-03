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
      rename_ctr: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('myPokemons');
  },
};
