const indexRouter = require("express").Router();
const renderTemplate = require("../lib/renderTemplate");

const Login = require("../views/Login");
const Registration = require("../views/Registration");
const MainPage = require("../views/MainPage");

const { Rout } = require("../../db/models");
const { User } = require("../../db/models");

indexRouter.get("/login", async (req, res) => {
  try {
    const { user } = req.session;
    renderTemplate(Login, { user }, res);
  } catch (error) {
    console.log(error);
    res.sendStatus(400);
  }
});

indexRouter.get("/registration", async (req, res) => {
  try {
    const { user } = req.session;
    renderTemplate(Registration, { user }, res);
  } catch (error) {
    console.log(error);
    res.sendStatus(400);
  }
});

indexRouter.get("/", async (req, res) => {
  try {
    const { user } = req.session;
    const routes = await Rout.findAll({
      include: [
        {
          model: User,
          attributes: ["userName"], //* имя пользователя
        },
      ],
      raw: true
    });
    console.log(routes);
    renderTemplate(MainPage, { user, routes }, res);
  } catch (error) {
    console.log(error);
    res.sendStatus(400);
  }
});

module.exports = indexRouter;
