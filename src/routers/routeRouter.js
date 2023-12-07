const routeRouter = require('express').Router();

const { Rout } = require('../../db/models');

routeRouter.post('/', async (req, res) => {
  try {
    const { user } = req.session;
    const { routName, mapData } = req.body;
    const isAdded = await Rout.create({ userId: user.id, routName, mapData });

    res.json(isAdded);
  } catch (error) {
    res.sendStatus(500);
  }
});

routeRouter.delete('/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const isDeleted = await Rout.destroy({ where: { id } });
    res.json(isDeleted);
  } catch (error) {
    res.sendStatus(500);
  }
});

module.exports = routeRouter;
