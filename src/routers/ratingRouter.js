const ratingRouter = require('express').Router();
const {Rating} = require('../../db/models');

ratingRouter.post('/', async (req, res) => {
    const { value, routId } = req.body;
    //! const { user } = req.session;
    try {
        const rate = await Rating.create({routId, value });
        // const review = reviewData.get({ plain: true });
        console.log('RATING WAS CREATED**', rate);
        res.sendStatus(200);        
    } catch (error) {
        console.log(error);
        res.sendStatus(400);  
    }
})


module.exports = ratingRouter;