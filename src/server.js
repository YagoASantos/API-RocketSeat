const express = require('express');
const routes = require('./routes');
require('./database')

const app = express();
app.use(express.json());
routes(app);
app.listen(3000, () => console.log('Servidor escutando na porta 3000.'));