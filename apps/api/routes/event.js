const { Router } = require("express");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const isAdmin = require("../middleware/isAdmin");
const EventController = require("../controllers/EventController");
const ValidateEventRequest = require("../middleware/ValidateEventRequest");
const validateSubscriptionRequest = require("../middleware/ValidateSubscriptionRequest");

const router = Router();

router.post("/", isAdmin, ValidateEventRequest, EventController.add); // add an event to the database
router.get("/", isAdmin, EventController.index); //get all current events
router.delete("/:id", isAdmin, EventController.destroy); // delete a event
router.put("/:id", isAdmin, ValidateEventRequest, EventController.update); // update a event data
router.post(
  "/:id",
  isAdmin,
  validateSubscriptionRequest,
  EventController.subscribe,
); // make a participant subscribe to an event
router.get("/count", isAdmin, EventController.getAllCountEvent);
router.get("/:eventId/count", EventController.getIndividualCountEvent);
router.get("/:id", isAdmin, EventController.getIndividualEvent); // get individual data about an event
router.get("/participant/:id", isAdmin, EventController.getParticipantData);
router.get("/participant/qr/:id", isAdmin, EventController.getParticipantQR);

module.exports = router;
