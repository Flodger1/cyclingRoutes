const reviewRouter = require('express').Router();
const {Review, Rout} = require('../../db/models');


reviewRouter.post('/', async (req, res) => {
    const { text, routId } = req.body;
    const { user } = req.session;
    try {
        const route = await Rout.findByPk(routId, {raw: true});
        if (user && (user.id !== route.userId)) {
        const reviewData = await Review.create({routId, userId: user.id, text });
        const review = reviewData.get({ plain: true });
        console.log('REVIEW WAS CREATED', review);
        review.userName = user.name;
        res.json(review);
        } else {
            res.sendStatus(403);
        }  
    } catch (error) {
        console.log(error);
        res.sendStatus(400);  
    }
});




module.exports = reviewRouter;