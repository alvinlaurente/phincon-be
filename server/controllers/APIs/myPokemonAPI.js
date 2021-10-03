import { myPokemons } from '../../models';
import isPrimeNum from '../../utils/isPrimeNum';

class myPokemonAPI {
  static getMyPokemonList = async (req, res) => {
    try {
      return await myPokemons.findAll({
        order: [['id', 'ASC']],
      })
        .then((data) => res.status(200).json({ status: 200, data }))
        .catch((e) => res.status(500).json({ message: 'Something broken.' }));
    } catch {
      return res.status(500).json({ message: 'Error Internal Server!' });
    }
  }

  static catchPokemon = async (req, res) => {
    try {
      const { id, name } = req.body;
      const idInt = parseInt(id, 10);

      const isIdExist = await myPokemons.findOne({ where: { id: idInt } });
      if (isIdExist) return res.status(409).json({ message: 'You already have the pokemon.' });

      const random = Math.random();
      if (random < 0.5) return res.status(401).json({ random: `${random * 100}` });

      return await myPokemons.create({
        id: idInt, name, url: `https://pokeapi.co/api/v2/pokemon/${id}/`, rename_ctr: 0,
      })
        .then((data) => res.status(201).json({
          status: 201, message: `Pokemon with ID ${idInt} named as ${name} has been added to your pokemon`, data, random: `${random * 100}`,
        }))
        .catch((e) => res.status(500).json({ message: 'Something broken.' }));
    } catch {
      return res.status(500).json({ message: 'Error Internal Server!' });
    }
  }

  static releasePokemon = async (req, res) => {
    try {
      const { id } = req.body;
      const idInt = parseInt(id, 10);

      const isIdExist = await myPokemons.findOne({ where: { id: idInt } });
      if (!isIdExist) return res.status(409).json({ message: 'You don\'t have the pokemon.' });

      const random = Math.floor(Math.random() * 100) + 1;
      if (!isPrimeNum(random)) return res.status(401).json({ message: 'Not Prime', random: `${random}` });

      return await myPokemons.destroy({ where: { id: idInt } })
        .then(() => res.status(200).json({ status: 200, message: `Pokemon with ID of ${id} has been released.` }))
        .catch((e) => res.status(500).json({ message: 'Something broken.' }));
    } catch {
      return res.status(500).json({ message: 'Error Internal Server!' });
    }
  }

  static renamePokemon = async (req, res) => {
    try {
      const { id } = req.body;
      const idInt = parseInt(id, 10);

      const getPokemonData = await myPokemons.findOne({ where: { id: idInt } });
      const renameCtr = parseInt(getPokemonData.rename_ctr, 10);

      // Get Fibonacci Number
      let n1 = 0;
      let n2 = 1;
      let nextTerm;
      let fibonacciNum = 0;
      for (let i = 1; i <= renameCtr + 1; i++) {
        fibonacciNum = n1;
        nextTerm = n1 + n2;
        n1 = n2;
        n2 = nextTerm;
        i = i++;
      }

      // Update name - Only for the first time renaming
      if (renameCtr === 0) {
        return await myPokemons.findOne({ where: { id: idInt } })
          .then((data) => {
            data.update({ name: `${getPokemonData.name}-0`, rename_ctr: renameCtr + 1 });
            return res.status(200).json({ status: 200, message: `Pokemon with ID ${id} renamed to ${getPokemonData.name}-0` });
          })
          .catch((e) => res.status(500).json({ message: 'Something broken.' }));
      }

      // Split Name
      const nameArr = getPokemonData.name.split('-');
      nameArr[1] = fibonacciNum;

      return await myPokemons.findOne({ where: { id: idInt } })
        .then((data) => {
          data.update({ name: `${nameArr[0]}-${nameArr[1]}`, rename_ctr: renameCtr + 1 });
          return res.status(200).json({ status: 200, message: `Pokemon with ID ${id} renamed to ${nameArr[0]}-${nameArr[1]}` });
        })
        .catch((e) => res.status(500).json({ message: 'Something broken.' }));
    } catch {
      return res.status(500).json({ message: 'Error Internal Server!' });
    }
  }
}

export default myPokemonAPI;
