const AddEventRequest = require("../requests/AddEventRequest");

module.exports = async (req, res, next) => {
  try {
    console.log(req.body);
    const validated = await AddEventRequest.validateAsync(req.body, {
      allowUnknown: false,
    });
    res.locals.validated = validated;
    next();
  } catch (error) {
    return res.status(422).json({ success: false, data: error });
  }
};
