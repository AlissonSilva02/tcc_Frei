import './utils/global.js';

import 'dotenv/config.js';
import express from 'express';
import cors from 'cors';


import adiconarRotas from './rotas.js';

const servidor = express();
servidor.use(cors());
servidor.use(express.json());

adiconarRotas(servidor);

const PORTA=process.env.PORTA;
servidor.listen(PORTA, () => console.log(`--->Api subiu na porta ${PORTA}`));