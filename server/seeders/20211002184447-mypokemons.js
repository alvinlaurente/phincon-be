module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('myPokemons', [
      {
        id: 25,
        name: 'Mighty Charizard',
      }, {
        id: 6,
        name: 'Charizard',
      }, {
        id: 200,
        name: 'Misdreavus',
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('myPokemons', null, {});
  },
};
