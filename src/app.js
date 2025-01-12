import express from 'express';
import routes from './routes/index.js';
import { errorHandler, notFoundRequest } from './routes/errorHandler.js';

//Import database
import database from './database/index.js';

const app = express();

app.use(express.json());
app.use('/',routes);
app.use(notFoundRequest);
app.use(errorHandler);

app.listen(3000);
