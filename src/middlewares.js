export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = "Wetube!!";
  res.locals.loggedIn = Boolean(req.session.loggedIn);
  if(res.locals.loggedIn==true){
  res.locals.username = req.session.user.username;}
  console.log(res.locals);
  next();
};
