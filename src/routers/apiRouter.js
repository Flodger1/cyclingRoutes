const apiRouter = require('express').Router();

const userRouter = require('./usersRouter');
const reviewRouter = require('./reviewRouter');
const ratingRouter = require('./ratingRouter');



apiRouter.use('/users', userRouter);
apiRouter.use('/review', reviewRouter);
apiRouter.use('/rate', ratingRouter);



module.exports = apiRouter;