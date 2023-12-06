const routeRouter = require('express').Router();

const { Rout } = require('../../db/models');

routeRouter.post('/', async (req, res) => {
  try {
    const userId = 1;
    const { routName, mapData } = req.body;
    const isAdded = await Rout.create({ userId, routName, mapData });

    res.json(isAdded);
  } catch (error) {
    res.sendStatus(500);
  }
});

module.exports = routeRouter;
