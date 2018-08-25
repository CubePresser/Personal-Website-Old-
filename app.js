const express = require('express');
const handlebars = require('express-handlebars');

const app = express();

app.engine('handlebars', handlebars({defaultLayout: 'main'}));
app.use('/static', express.static('public'));
app.set('view engine', 'handlebars');

