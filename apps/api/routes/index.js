var express = require("express");
var router = express.Router();
const isAdmin = require("../middleware/isAdmin");
const PrismaClient = require("@prisma/client");
const prisma = new PrismaClient();

/* GET home page. */
router.get("/", function (req, res, next) {
  // returns all events'
  res.json({ "deerhack-api": true });
});

router.post("/", isAdmin, function (req, res) {
  return res.status(200).json("add events");
});

module.exports = router;
