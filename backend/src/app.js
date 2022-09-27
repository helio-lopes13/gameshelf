const express = require('express');
const mysql = require('mysql');

const app = express();

app.use(express.json());

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: '1234',
    database: 'gameshelf'
});

app.listen(3333, () => {
    console.log('servidor rodando...')
});