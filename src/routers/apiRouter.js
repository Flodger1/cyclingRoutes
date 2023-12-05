const apiRouter = require('express').Router();

const reviewRouter = require('./reviewRouter');



apiRouter.use('/review', reviewRouter);



module.exports = apiRouter;