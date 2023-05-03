const { Router } = require("express")
const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()
const isAdmin = require("../middleware/isAdmin")
const EventController = require("../controllers/EventController")
const ValidateEventRequest = require("../middleware/ValidateEventRequest")
const validateSubscriptionRequest = require("../middleware/ValidateSubscriptionRequest")


const router = Router()


router.post("/",ValidateEventRequest,EventController.add) // works 100%
router.get("/",EventController.index) // works 100%
router.delete("/:id",isAdmin,EventController.destroy)
router.put("/:id",isAdmin,ValidateEventRequest,EventController.update)

router.post("/:id",validateSubscriptionRequest,EventController.subscribe)

router.get('/:id',EventController.getIndividual)

router.get('/participant/:id',EventController.get_participant_data)


module.exports = router

