import express from 'express';
import myPokemonAPI from '../controllers/APIs/myPokemonAPI';

const router = express.Router();

router.get('/api/my-pokemon-list', myPokemonAPI.getMyPokemonList);
router.post('/api/catch', myPokemonAPI.catchPokemon);
router.delete('/api/release', myPokemonAPI.releasePokemon);
router.patch('/api/rename', myPokemonAPI.renamePokemon);

export default router;
