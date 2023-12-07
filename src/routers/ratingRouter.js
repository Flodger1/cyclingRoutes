const ratingRouter = require('express').Router();
const {Rating, Rout} = require('../../db/models');
const isAuth = require('../middleware/isAuth')

ratingRouter.post('/', isAuth, async (req, res) => {
    const { value, routId } = req.body;
    const { user } = req.session;
    try {
        const route = await Rout.findByPk(routId, {raw: true});
        if (user.id !== route.userId) {                         //! убрал user --> isAuth
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