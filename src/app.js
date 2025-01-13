import express from 'express';
import routes from './routes/index.js';
import { errorHandler, notFoundRequest } from './routes/errorHandler.js';
import cors from 'cors';

//Import database
import database from './database/index.js';

const app = express();


app.use(express.json());
app.use(cors());
app.use('/',routes);
app.use(notFoundRequest);
app.use(errorHandler);

app.listen(3000);
