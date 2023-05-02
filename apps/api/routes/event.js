const { Router } = require("express")
const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()
const isAdmin = require("../middleware/isAdmin")
const EventController = require("../controllers/EventController")
const ValidateEventRequest = require("../middleware/ValidateEventRequest")



const router = Router()

router.post("/",isAdmin,ValidateEventRequest,EventController.add)
router.get("/",EventController.index)
router.delete("/:eventToDelete",isAdmin,EventController.destroy)
router.put("/:id",isAdmin,ValidateEventRequest,EventController.update)



module.exports = router

