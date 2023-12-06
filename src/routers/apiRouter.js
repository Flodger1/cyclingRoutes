const apiRouter = require('express').Router();

const routeRouter = require('./routeRouter');
const userRouter = require('./usersRouter');
const reviewRouter = require('./reviewRouter');
const ratingRouter = require('./ratingRouter');

apiRouter.use('/users', userRouter);
apiRouter.use('/routes', routeRouter);
apiRouter.use('/review', reviewRouter);
apiRouter.use('/rate', ratingRouter);

module.exports = apiRouter;
