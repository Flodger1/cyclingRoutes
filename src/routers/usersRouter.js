const userRouter = require('express').Router();

const { User } = require('../../db/models');

userRouter.post('/registration', async (req, res) => {
  try {
    const { userName, email, password } = req.body;

    const user = await User.create({
      userName,
      email,
      password,
    });

    const cleanedUser = user.get({ plain: true });

    req.session.user = {
      id: cleanedUser.id,
      name: cleanedUser.userName,
      email: cleanedUser.email,
    };
    res.json(cleanedUser);
  } catch (error) {
    console.log(error);
    res.sendStatus(400);
  }
});

userRouter.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({
      where: {
        email,
      },
    });

    if (user && user.password === password) {
      req.session.user = {
        id: user.id,
        name: user.userName,
        email: user.email,
      };
      res.json(user);
    } else {
      const result = false;
      res.json(result);
    }
  } catch (error) {
    console.log(error);
    res.sendStatus(400);
  }
});

userRouter.get('/logout', (req, res) => {
  try {
    req.session.destroy((err) => {
      if (err) {
        console.log(err);
      } else {
        res.clearCookie('mySession');
        res.json({ msg: 'Success' });
      }
    });
  } catch (error) {
    console.log(error);
    res.sendStatus(400);
  }
});

module.exports = userRouter;
