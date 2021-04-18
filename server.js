import express from 'express';
import greeting from './modules/greeting.js';
import random from './modules/random.js';
import info from './modules/packageInfo.js';
import operations from './modules/operations.js';

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send(greeting());
});

app.get('/random', (req, res) => {
    res.send(random());
})

app.get('/info', async (req, res) => {
    res.send(await info());
});

app.get('/operaciones', (req, res) => {
    res.send(operations(req.query));
});

const PORT = process.env.PORT || 8080;
app.set('PUERTO', PORT);

const server = app.listen(app.get('PUERTO'), () => {
    console.log(`Servidor express escuchando en el puerto ${server.address().port}`);
});
server.on('error', error => { console.log(`Error en el Servidor ${error}`)});