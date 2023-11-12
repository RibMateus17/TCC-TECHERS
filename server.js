const express = require('express');
const { PORT } = require('./variaveis_shared/environment');
const RouteLoader = require('./routes/router.loader');
const app = express();
const cors = require('cors')

const corsOptions = {
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE'
}
app.use(cors(corsOptions))
app.use(express.json());
app.use(express.static(__dirname));

app.post('/login', (req, res) => {
    const { email, username, password } = req.body;

    if (email === 'jeiejeusb@gmail.com' && username === 'Mateus Cardoso' && password === '1234') {
        res.redirect('/products.html'); 
    } else {
        res.status(401).json({ message: 'Credenciais incorretas' });
    }
});


app.get('/close-popup', (req, res) => {
    res.send('closed');
});

RouteLoader.load(app);

app.listen(PORT, aoLigarServidor);

function aoLigarServidor() {
    console.log(`SERVIDOR LIGADO NA PORTA ${PORT}`);
}
