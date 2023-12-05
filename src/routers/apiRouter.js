const apiRouter = require('express').Router();

const routeRouter = require('./routeRouter');

apiRouter.use('/routes', routeRouter);

module.exports = apiRouter;
