const routeRouter = require('express').Router();

const { Rout } = require('../../db/models');

routeRouter.post('/', async (req, res) => {
  try {
    const { user } = req.session;
    const { routName, mapData, location } = req.body;
    const isAdded = await Rout.create({
      userId: user.id,
      routName,
      mapData,
      location,
    });

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

routeRouter.get('/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const route = await Rout.findOne({ where: { id } });
    res.json(route);
  } catch (error) {
    res.sendStatus(500);
  }
});

module.exports = routeRouter;
