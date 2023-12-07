const indexRouter = require('express').Router();
const Sequelize = require('sequelize');
const renderTemplate = require('../lib/renderTemplate');
const { Rout, User, Rating, Review } = require('../../db/models');
const RoutePage = require('../views/RoutePage');
const MainPage = require('../views/MainPage');
const Login = require('../views/Login');
const Registration = require('../views/Registration');
const PersonalPage = require('../views/PersonalPage');

indexRouter.get('/', async (req, res) => {
  try {
    const { user } = req.session;
    let routes = await Rout.findAll({
      attributes: [
        'id',
        'userId',
        'routName',
        'location',
        'mapData',
        'createdAt',
        'updatedAt',
        [Sequelize.fn('AVG', Sequelize.col('Ratings.value')), 'averageRating'],
      ],
      include: [
        {
          model: User,
          attributes: ['userName'],
        },
        {
          model: Rating,
          attributes: [],
        },
      ],
      group: ['Rout.id', 'User.id', 'Ratings.routId'],
      order: [[Sequelize.fn('AVG', Sequelize.col('Ratings.value')), 'DESC']],
    });
    routes = routes.map((el) => el.get({ plain: true }));
    //   console.log('***********', Object.keys(routes[6]),'***********', routes[6].dataValues.averageRating);
    // res.send(routes);
    renderTemplate(MainPage, { user, routes }, res);
  } catch (error) {
    console.log(error);
    res.sendStatus(400);
  }
});

indexRouter.get('/profile', async (req, res) => {
  const { user } = req.session;
  let usersRoutes = await Rout.findAll({
    attributes: [
      'id',
      'userId',
      'routName',
      'location',
      'mapData',
      'createdAt',
      'updatedAt',
      [Sequelize.fn('AVG', Sequelize.col('Ratings.value')), 'averageRating'],
    ],
    where: { userId: user.id },
    include: [
      {
        model: User,
        attributes: ['userName'],
      },
      {
        model: Rating,
        attributes: [],
      },
    ],
    group: ['Rout.id', 'User.id', 'Ratings.routId'],
    order: [[Sequelize.fn('AVG', Sequelize.col('Ratings.value')), 'DESC']],
  });
  usersRoutes = usersRoutes.map((el) => el.get({ plain: true }));
  renderTemplate(PersonalPage, { user, usersRoutes, title: user.name }, res);
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

indexRouter.get('/rout/:id', async (req, res) => {
  const { user } = req.session;
  const { id } = req.params;
  const routeData = await Rout.findByPk(id, { include: [{ model: User }] });
  const route = routeData.get({ plain: true });
  const routeRates = await Rating.findAll({ where: { routId: id }, raw: true });
  const sum = routeRates.reduce((acc, el) => acc + el.value, 0);
  console.log(sum);
  let rate;
  if (sum) {
    rate = (sum / routeRates.length).toFixed(1);
  } else {
    rate = `NEW - Ваша оценка будет первой`;
  }
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
module.exports = indexRouter;
