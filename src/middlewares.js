export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = "Wetube!!";
  res.locals.loggedIn = Boolean(req.session.loggedIn);
  console.log(res.locals);
  next();
};
