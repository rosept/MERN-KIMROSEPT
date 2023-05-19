import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';

import Connection from './database/db.js';
import Routes from './routes/route.js';
import path from 'path';

import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();

dotenv.config();

app.use(bodyParser.json({ extended: true}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use('/', Routes);
app.use(express.static(path.join(__dirname, 'public')));

const PORT = 8080;

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

Connection(username, password);

app.listen(PORT, () => {
    console.log("Server is running successfully on "+ PORT)
});