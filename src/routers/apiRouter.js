const apiRouter = require('express').Router();

const userRouter = require('./usersRouter');

apiRouter.use('/users', userRouter);

module.exports = apiRouter