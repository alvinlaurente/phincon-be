import express from 'express';
import myPokemonAPI from '../controllers/APIs/myPokemonAPI';

const router = express.Router();

router.use('/api', myPokemonAPI);

export default router;
