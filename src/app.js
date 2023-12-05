require('dotenv').config();
require('@babel/register');

const indexRouter = require('./routers/indexRouter')
const apiRouter = require('./routers/apiRouter')


const express = require('express');
const morgan =require('morgan');
const path = require('path');

const expressSession = require('express-session');
const FileStore = require('session-file-store')(expressSession);


const app = express();

const PORT = process.env.PORT;

const sessionConfig = {
  name: 'mySession',
  store: new FileStore(), // добавить после установки session-file-store
  secret: process.env.SECRET_KEY_SESSION,
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 10 * 60 * 1000, // устанавливаем сколько живет кука
    httpOnly: true,
  },
}


app.use(expressSession(sessionConfig));

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public/')));


app.use('/', indexRouter);
app.use('/api', apiRouter);


app.get('*', (req, res) => {
  res.redirect('/');
});



app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})