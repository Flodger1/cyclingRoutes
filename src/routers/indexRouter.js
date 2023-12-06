const indexRouter = require('express').Router();
const renderTemplate = require('../lib/renderTemplate');
const { Rout, User, Rating, Review } = require('../../db/models');
const RoutePage = require('../views/RoutePage');
const MainPage = require('../views/MainPage');
const Login = require('../views/Login');
const Registration = require('../views/Registration');
const PersonalPage = require('../views/PersonalPage');

indexRouter.get('/profile', async (req, res) => {
  const { user } = req.session;
  const usersRoutes = await Rout.findAll({ where: { userId: user.id } });
  renderTemplate(PersonalPage, { user, usersRoutes, title: user.name }, res);
});

indexRouter.get('/rout/:id', async (req, res) => {
  const { user } = req.session;
  const { id } = req.params;
  const routeData = await Rout.findByPk(id, { include: [{ model: User }] });
  const route = routeData.get({ plain: true });
  const routeRates = await Rating.findAll({ where: { routId: id }, raw: true });
  const sum = routeRates.reduce((acc, el) => acc + el.value, 0);
  const rate = (sum / routeRates.length).toFixed(1);
  const reviewsData = await Review.findAll({
    where: { routId: id },
    include: [{ model: User }],
    order: [['createdAt', 'DESC']],
  });
  const reviews = reviewsData.map((el) => el.get({ plain: true }));
  // console.log("ALL ROUT REVIEWS*******", reviews );
  // console.log("ONE ROUT*******", route );
  // console.log("RATE OF ROUT*******", rate );
  renderTemplate(RoutePage, { route, rate, reviews, user }, res);
});

indexRouter.get('/login', async (req, res) => {
  try {
    const { user } = req.session;
    renderTemplate(Login, { user }, res);
  } catch (error) {
    console.log(error);
    res.sendStatus(400);
  }
});

indexRouter.get('/registration', async (req, res) => {
  try {
    const { user } = req.session;
    renderTemplate(Registration, { user }, res);
  } catch (error) {
    console.log(error);
    res.sendStatus(400);
  }
});

indexRouter.get('/', async (req, res) => {
  try {
    const { user } = req.session;
    const routes = await Rout.findAll({
      include: [
        {
          model: User,
          attributes: ['userName'], //* имя пользователя
        },
      ],
      raw: true,
    });
    renderTemplate(MainPage, { user, routes }, res);
  } catch (error) {
    console.log(error);
    res.sendStatus(400);
  }
});

module.exports = indexRouter;
