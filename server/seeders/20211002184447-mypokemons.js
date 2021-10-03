module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('myPokemons', [
      {
        id: 25,
        name: 'Mighty Pikachu-1',
        url: 'https://pokeapi.co/api/v2/pokemon/25/',
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
        rename_ctr: 1,
      }, {
        id: 6,
        name: 'Charizard-3',
        url: 'https://pokeapi.co/api/v2/pokemon/6/',
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png',
        rename_ctr: 4,
      }, {
        id: 200,
        name: 'Misdreavus',
        url: 'https://pokeapi.co/api/v2/pokemon/200/',
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/200.png',
        rename_ctr: 0,
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('myPokemons', null, {});
  },
};
