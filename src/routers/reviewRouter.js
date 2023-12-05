const reviewRouter = require('express').Router();
const {Review} = require('../../db/models');


reviewRouter.post('/', async (req, res) => {
    const { text, routId } = req.body;
    //! const { user } = req.session;
    try {
        const reviewData = await Review.create({routId, userId: 1, text });
        const review = reviewData.get({ plain: true });
        console.log('REVIEW WAS CREATED', review);
        review.userName = "Какой-то автор";
        //! review.userName = user.userName;
        res.json(review);        
    } catch (error) {
        console.log(error);
        res.sendStatus(400);  
    }
})






module.exports = reviewRouter;