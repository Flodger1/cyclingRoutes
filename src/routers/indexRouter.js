const indexRouter = require('express').Router();

const { Rout } = require('../../db/models');

const renderTemplate = require('../lib/renderTemplate');
const PersonalPage = require('../views/PersonalPage');

indexRouter.get('/profile', async (req, res) => {
  // get user from session
  const id = 1;
  const usersRoutes = await Rout.findAll({ where: { id } });
  renderTemplate(PersonalPage, { usersRoutes, title: `username` }, res);
});

module.exports = indexRouter;
