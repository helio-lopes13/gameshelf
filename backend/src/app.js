import express from 'express';
import cors from 'cors';
import multer from 'multer';
import { errors } from 'celebrate';

import routes from './routes.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use(multer().any());
app.use(routes);

app.use(errors());

app.listen(3333, () => {
    console.log('servidor rodando...')
});