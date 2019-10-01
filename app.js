const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const path = require('path');

app.set('view engine', 'pug');
app.set('views', './views');

const indexRouter = require('./router/indexRouter');

// App models

// app public files open
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// app/router/*
    // index 
    app.use(indexRouter);

app.listen(80, () => {
    console.log('Is online 80 port');
});
