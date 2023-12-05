const apiRouter = require('express').Router();

const reviewRouter = require('./reviewRouter');
const ratingRouter = require('./ratingRouter');



apiRouter.use('/review', reviewRouter);
apiRouter.use('/rate', ratingRouter);



module.exports = apiRouter;