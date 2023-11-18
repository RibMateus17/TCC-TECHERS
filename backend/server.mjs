import express from 'express';
import 'dotenv/config.js';
import cors from 'cors';
import Router from './routes/index.mjs';

// Resgata PORT a partir do DotEnv
const PORT = parseInt(process.env.SERVER_API_PORT);

// Instancia app
const app = express();

// Ativa cors
app.use(cors());

// Habilita json
app.use(express.json());

// Rota de teste de conexão
app.get('/', (_req, res) => {
  res.status(200).json({ message: "Conexão estabelecida "});
})

// Inclui as rotas no app
app.use(Router);

// Permitindo acesso à pasta files-storage
app.use(express.static('backend'));

/**
 * Para listar tudo o que está dentro do banco de dados
 * basta colocar abaixo a seguinte instrução:
 * getAllUsers();
 */

// Inicializa escuta do servidor
app.listen(PORT, () => {
    console.log(`Server open in ${ PORT }`);
});

