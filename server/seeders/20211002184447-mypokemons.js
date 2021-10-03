module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('myPokemons', [
      {
        id: 25,
        name: 'Mighty Pikachu-1',
        url: 'https://pokeapi.co/api/v2/pokemon/25/',
        rename_ctr: 1,
      }, {
        id: 6,
        name: 'Charizard-3',
        url: 'https://pokeapi.co/api/v2/pokemon/6/',
        rename_ctr: 4,
      }, {
        id: 200,
        name: 'Misdreavus',
        url: 'https://pokeapi.co/api/v2/pokemon/200/',
        rename_ctr: 0,
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('myPokemons', null, {});
  },
};
