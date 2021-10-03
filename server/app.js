import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import path from 'path';
import logger from 'morgan';
import routes from './routes';

require('dotenv').config();

const app = express();
app.use(cors({
  credentials: true,
  methods: 'GET,PUT,PATCH,POST,DELETE',
  preflightContinue: false,
  allowedHeaders: 'Access-Control-Allow-Headers, Origin, X-Requested-With, Content-Type, Accept',
}));
app.use(helmet({ contentSecurityPolicy: false }));
app.set('views', path.join(__dirname, '/views'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(logger('dev'));
app.use(routes);

const port = process.env.PORT_NUM;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
