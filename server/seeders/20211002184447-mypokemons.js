module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('myPokemons', [
      {
        id: 25,
        name: 'Mighty Charizard-1',
        rename_ctr: 1,
      }, {
        id: 6,
        name: 'Charizard-3',
        rename_ctr: 4,
      }, {
        id: 200,
        name: 'Misdreavus',
        rename_ctr: 0,
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('myPokemons', null, {});
  },
};
