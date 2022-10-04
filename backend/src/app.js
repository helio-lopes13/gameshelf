import express from 'express';
import mysql from 'mysql';

import routes from './routes.js';

const app = express();

app.use(express.json());
app.use(routes);

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: '1234',
    database: 'gameshelf'
});

app.listen(3333, () => {
    console.log('servidor rodando...')
});