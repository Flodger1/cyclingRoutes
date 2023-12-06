const indexRouter = require('express').Router();
const renderTemplate = require('../lib/renderTemplate');
const {Rout, User, Rating, Review} = require('../../db/models');
const RoutePage = require('../views/RoutePage');
const MainPage = require('../views/MainPage');


// indexRouter.get('/', async (req, res) => {
//     console.log('Привет, все работает');
//     renderTemplate(MainPage, null, res);
// });


indexRouter.get('/rout/:id', async (req, res) => {
    const { user } = req.session;
    const { id } = req.params;
    const routeData = await Rout.findByPk(id, {include: [{ model: User }] });
    const route = routeData.get({ plain: true });
    const routeRates = await Rating.findAll({where: {routId : id}, raw: true});
    const sum = routeRates.reduce((acc, el) => acc + el.value, 0);
    const rate = (sum / routeRates.length).toFixed(1);
    const reviewsData = await Review.findAll({where: {routId : id}, include: [{ model: User }], order: [['createdAt', 'DESC']]});
    const reviews = reviewsData.map((el)=> el.get({ plain: true }));
    console.log("ALL ROUT REVIEWS*******", reviews );
    console.log("ONE ROUT*******", route );
    console.log("RATE OF ROUT*******", rate );
    renderTemplate(RoutePage, {route, rate, reviews, user}, res);
});






module.exports = indexRouter;