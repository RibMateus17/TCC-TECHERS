const express = require('express');
const { PORT } = require('./variaveis_shared/environment');
const ExampleRouteLoader = require('./routes/example.router.loader');
const app = express();

app.use(express.json());
app.use(express.static(__dirname));

app.post('/login', (req, res) => {
    const { email, username, password } = req.body;

    if (email === 'jeiejeusb@gmail.com' && username === 'Mateus Cardoso' && password === '1234') {
        res.redirect('/dashboard.html');
    } else {
        res.status(401).json({ message: 'Conta não encontrada, cheque se tudo está escrito corretamente, ou crie uma nova conta' });
    }
});

ExampleRouteLoader.load(app);

app.listen(PORT, aoLigarServidor);

function aoLigarServidor() {
    console.log(`SERVIDOR LIGADO NA PORTA ${PORT}`);
}
