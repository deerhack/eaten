const AdminLoginRequest = require("../requests/AdminLoginRequest");

module.exports = async (req, res, next) => {
  try {
    const validated = await AdminLoginRequest.validateAsync(req.body);
    res.locals.validated = validated;
    next();
  } catch (error) {
    return res.status(422).json(error);
  }
};
