import express from 'express';
import 'dotenv/config.js';
import cors from 'cors';
import { getAllUsers } from './database/User.js';
import router from './backend/routes/index.js';

// Resgata PORT a partir do DotEnv
const PORT = parseInt(process.env.PORT);

// Instancia app
const app = express();

// Ativa cors
app.use(cors());

// Habilita json
app.use(express.json());

// Inclui as rotas no app
app.use(router);

/**
 * Para listar tudo o que está dentro do banco de dados
 * basta colocar abaixo a seguinte instrução:
 * getAllUsers();
 */

// Inicializa escuta do servidor
app.listen(PORT, () => {
    console.log(`Server open in ${ PORT }`);
});

