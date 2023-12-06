const ratingRouter = require('express').Router();
const {Rating, Rout} = require('../../db/models');

ratingRouter.post('/', async (req, res) => {
    const { value, routId } = req.body;
    const { user } = req.session;
    try {
        const route = await Rout.findByPk(routId, {raw: true});
        if (user && (user.id !== route.userId)) {
        const rate = await Rating.create({routId, value });
        console.log('RATING WAS CREATED**', rate);
        res.sendStatus(200);
        } else {
            res.sendStatus(403);
        }      
    } catch (error) {
        console.log(error);
        res.sendStatus(400);
    }
})


module.exports = ratingRouter;