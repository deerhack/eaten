const EventSubscriptionRequest = require("../requests/EventSubscriptionRequest");

module.exports = async (req, res, next) => {
  try {
    console.log(req.body);
    console.log(req.body.ID)
    const validated = await EventSubscriptionRequest.validateAsync(req.body);
    res.locals.validated = validated;
    next();
  } catch (error) {
    return res.status(422).json({ success: false, error: error });
  }
};
