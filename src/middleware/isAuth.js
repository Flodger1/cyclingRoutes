module.exports = function isAuth (req, res, next) {
  console.log('req.session', req.session);
  if (req.session?.user) {
    next();
  } else {
    res.redirect('/login');
  }
};
